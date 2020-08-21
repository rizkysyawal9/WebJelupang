---
title: Hidroponik
date: 2020-07-04T13:11:17.374Z
---
![](/uploads/hidroponikiot.png)

Program hidroponik dimulai dengan penyemaian bibit oleh Kelompok KKN-T Tangsel 08 bersama masyarakat terutama Ibu-Ibu yang tergabung dalam kelompok PKK. Bersama kita membuat media tanam menggunakan rockwool dan menyemai benih pakchoy dan percobaan menyemai benih selada. Selanjutnya mengenai penjualan komoditi hasil panen hidroponik Mentari Hydro. Kami memberikan *knowledge* tentang pemasaran dan pembukuan hasil penjualan. Pemasaran dilakukan secara daring menggunakan media sosial Instagram dan Facebook.

> Untuk akun Instagram bisa di-*follow* akunnya di : mentarihidroponik

Untuk penanaman hidroponik kami juga membantu dalam pembuatan tempat penumbuhan tanaman hidroponik berbasis pipa PVC. Kami membantu melubangi pipa dan memodifikasi tempat penanaman yang sudah ada. Selain itu, kami juga membuat alat monitor nutrisi pada alat penanaman hidroponik juga guna mengendalikan pompa pengairan hidroponik. Di samping itu, kami juga membuat perangkap serangga guna menghindari tanaman hidroponik diserang hama.

## Alat Monitoring Hidroponik

Alat *monitoring* ini berbasis mikrokontroler Arduino dalam memantau nutrisi AB Mix pada hidroponik juga mengendalikan hidup-mati pompa berdasarkan jam. Alat yang digunakan tidak terlalu banyak dapat dibeli di *online shop* seperti Shoope dan Tokopedia.

### Bahan dan Alat

| Nama Alat           | Keterangan               |
| ------------------- | ------------------------ |
| Arduino UNO R3      | Mikrokontroler           |
| RTC                 | Pengatur jam             |
| DHT11               | Sensor kelembaban        |
| DS18B20             | Sensor tempratur         |
| Relay               | Pengendali pompa         |
| Breadboard          |                          |
| Kabel jumper        |                          |
| LCD with I2C Module | Untuk menampilkan output |

### Rangakian Alat

![](/uploads/rangkaian-alat.png)

### Source Code

```c
#include <DHT.h>
#include <DHT_U.h>
#include <RTClib.h>
#include <LiquidCrystal_I2C.h>

// dua di bawah ini adalah library custom, jangan pakai library yang original
#include <OneWire.h>
#include <DallasTemperature.h>

int RelayPin = 3; // pin relay ada di pin 3 digital
int pumpState = 0; // pumpState untuk kondisi mati/nyalakan pompa

LiquidCrystal_I2C lcd(0x3f, 16, 2); // set alamat ROM LCD

// set&define variabel sensor DHT
#define dhtType DHT11
const int dhtPin = 2;
DHT dht(dhtPin, dhtType);

// define rtc
RTC_DS3231 rtc;

//**************************** User Defined Variables ******************************
 
//##################################################################################
//--------   JANGAN GANTI R1 dengan resistor lebih rendah dari 300 ohms   ----------
//##################################################################################

int R1 = 680;
int Ra = 25;
int ECPin = A2;
int ECGround = A0;
int ECPower = A1;

/*
 * *********** PPM Conversion [Learn to use EC, good for knowledge hehe] ***********
 * Hana     [USA]       PPMconversion = 0.5
 * Eutech   [EU]        PPMconversion = 0.64
 * Tranchen [Australia] PPMconversion = 0.7
 * Atur sesuai standar negara masing-masing
 */
float PPMconversion = 0.7;


/*
 * ************************ Compensating for temperature *************************** 
 * The value below will change depending on what chemical solution we are measuring
 * 0.019 is generaly considered the standard for plant nutrients [google "Temperature 
 * compensation EC" for more info
 */
float TemperatureCoef = 0.019; // this changes depending on what chemical we are measuring


/*
 * ********************** Cell Constant For Ec Measurements ********************* 
 * Mine was around 2.9 with plugs being a standard size they should all be around the same
 * But If you get bad readings you can use the calibration script and fluid 
 * to get a better estimate for K
 */
float K = 3.74; // K didapat dari hasil kalibrasi dengan script lain


// **************************** Temp Probe Related *********************************
#define ONE_WIRE_BUS 10          // Data wire For Temp Probe is plugged into pin 10 on the Arduino
const int TempProbePossitive =8;  //Temp Probe power connected to pin 9
const int TempProbeNegative=9;    //Temp Probe Negative connected to pin 8

// **************************** END Of Recomended User Inputs ***********************
// **************************** JANGAN UBAH LINE DIBAWAH INI! ***********************

OneWire oneWire(ONE_WIRE_BUS);// Setup a oneWire instance to communicate with any OneWire devices
DallasTemperature sensors(&oneWire);// Pass our oneWire reference to Dallas Temperature.

float Temperature=10;
float EC=0;
float EC25 =0;
int ppm =0;

float raw= 0;
float Vin= 5;
float Vdrop= 0;
float Rc= 0;
float buffer=0;

int humidityValue = 0;
int tempValue = 0;


 
void setup() {
  // SET UP TDH SENSOR
  Serial.begin(9600); // set baude 9600 hz

  pinMode(RelayPin, OUTPUT); // set relaypin in output mode
  
  pinMode(TempProbeNegative , OUTPUT ); //seting ground pin as output for tmp probe
  digitalWrite(TempProbeNegative , LOW );//Seting it to ground so it can sink current
  pinMode(TempProbePossitive , OUTPUT );//ditto but for positive
  digitalWrite(TempProbePossitive , HIGH );
  pinMode(ECPin,INPUT);
  pinMode(ECPower,OUTPUT);//Setting pin for sourcing current
  pinMode(ECGround,OUTPUT);//setting pin for sinking current
  digitalWrite(ECGround,LOW);//We can leave the ground connected permanantly
 
  delay(200);// gives sensor time to settle
  sensors.begin();
  //** Adding Digital Pin Resistance to [25 ohm] to the static Resistor *********//
  // Consule Read-Me for Why, or just accept it as true
  R1=(R1+Ra);// Taking into acount Powering Pin Resitance
 
  Serial.println("Make sure Probe and Temp Sensor are in Solution and solution is well mixed");
  Serial.println("Measurments at 5's Second intervals [Dont read Ec morre than once every 5 seconds]:");
  Serial.println("");

  // setting up sensor dht
  Serial.println(F("Setting up sensor DHT11"));
  dht.begin();
  Wire.begin();


  // setting up rtc
  //rtc.adjust(DateTime(F(__DATE__), F(__TIME__))); // set time
  //if (!rtc.begin()) {
  //  Serial.println("[!] RTC begin error!");
  //} else if (rtc.lostPower()) {
  //  Serial.println("[?] RTC lost power, let's set the time");
  //  rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  //}


  // lcd splash text
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print(" KKN-T Jelupang ");
  lcd.setCursor(0, 1);
  lcd.print(" Tangsel_08 IPB ");

  delay(2000);
  lcd.clear(); // clean up lcd text
}

void loop() {
  int stateHari = 0;

  // set waktu di rtc dengan waktu sekarang
  DateTime now = rtc.now();
  /* Keterangan, untuk manggil tahun, tanggal, dll
   * now.year() = tahun
   * now.month() = bulan
   * now.day() = hari
   * now.hour() = jam
   * now.minute() = menit
   */

  // set stateHari, jam 7 pagi ~ 5 sore adalah waktu siang (waktu penyiraman)
  if (now.hour() >= 7 & now.hour() <= 17) {
    stateHari = 1; // siang
  } else {
    stateHari = 0; // malam
  }

  workPump(now.hour(), now.minute(), stateHari); // memanggil function workPump untuk mati/nyalakan pompa
  lcd.setCursor(0, 0);
  if (now.minute() < 10) {
    lcd.print(now.hour()); lcd.print(":"); lcd.print("0"); lcd.print(now.minute());
    } else {
      lcd.print(now.hour()); lcd.print(":"); lcd.print(now.minute());
      }

  // Output di LCD 
  GetDHT(); // memanggil function GetDHT untuk membaca bacaan sensor DHT11
  GetEC();  // memanggil function GetEC untuk mengambil data guna sensor TDS
  ShowToLCD(); // memanggil function ShowToLCD untuk menampilkan hasil bacaan sensor
  Serial.print("| Jam ");
  Serial.print(now.hour()); Serial.print(":"); Serial.print(now.minute());
  Serial.println("");
  delay(5000);
}

void GetDHT() {
  humidityValue = dht.readHumidity();
  tempValue = dht.readTemperature(); // read temperature dari dht (derajat celcius)
  // check jika gagal membaca data dari sensor dht and exit early (to try again)
  if (isnan(humidityValue) || isnan(tempValue) || tempValue == 0 || humidityValue == 0) { // jika humidityValue atau tempValue valuenya gak ada
     Serial.println(F("[!] DHT11 Error!")); // tampilkan pesan error
  }
}

void GetEC(){
  sensors.requestTemperatures();// Send the command to get temperatures
  Temperature=sensors.getTempCByIndex(0); //Stores Value in Variable

  //************Estimates Resistance of Liquid ****************
  digitalWrite(ECPower,HIGH);
  raw = analogRead(ECPin);
  raw = analogRead(ECPin); // This is not a mistake, First reading will be low beause if charged a capacitor
  digitalWrite(ECPower, LOW);

  //***************** Converts to EC **************************
  Vdrop= (Vin*raw)/1024.0;
  Rc=(Vdrop*R1)/(Vin-Vdrop);
  Rc=Rc-Ra; //acounting for Digital Pin Resitance
  EC = 1000/(Rc*K);
 
  //*************Compensating For Temperaure********************
  EC25  =  EC/ (1+ TemperatureCoef*(Temperature-25.0));
  ppm=(EC25)*(PPMconversion*1000);  
  
}

void ShowToLCD(){
  if (ppm < 130) {
      ppm -= 20;
    } else if (ppm > 900) {
        ppm -= 50;
      }

  //lcd.setCursor(0, 0);
  //lcd.print("H: "); lcd.print(humidityValue); lcd.print("% T: "); lcd.print(tempValue); lcd.print(" C");
  lcd.setCursor(0, 1);
  //lcd.print("EC:"); lcd.print(EC25); 
  lcd.print("PPM: "); lcd.print(ppm);
  
  if (pumpState == 1) { // jika pumpState == 1 maka
    lcd.print(" | On!");  // tampilkan di lcd bahwa pompa nyala
    digitalWrite(RelayPin, LOW); // nyalakan pompa
    } else { // jika pumpState == 0 maka
      digitalWrite(RelayPin, HIGH); // matikan pompa
      lcd.print(" | Off!"); // tampilkan di lcd bahwa pompa mati
      }
  
  Serial.print("Rc: ");
  Serial.print(Rc);
  Serial.print(" EC: ");
  Serial.print(EC25);
  Serial.print(" Simens  ");
  Serial.print(ppm);
  Serial.print(" ppm  ");
  Serial.print(Temperature);
  Serial.print(" *C  ");
}

void workPump(int nowJam, int nowMenit, int nowHari) {
  if (nowHari == 1) { // jika siang, cek jam. Jika jam sesuai, matikan atau nyalakan pompa
    
    if (nowJam == 7 & nowMenit == 0) { // jika jam 7:00 nyalakan pompa
      pumpState = 1; // set pumpState jadi 1 untuk nyalakan pompa
      delay(500);
    } else if (nowJam == 7 & nowMenit == 30) {
      pumpState = 0; // set pumpState jadi 0 untuk matikan pompa
      delay(500);
    }


    if (nowJam == 10 & nowMenit == 0) {
      pumpState = 1;
      delay(500);
    } else if (nowJam == 10 & nowMenit == 30) {
      pumpState = 0;
      delay(500);
    }


    if (nowJam == 12 & nowMenit == 0) {
      pumpState = 1;
      delay(500);
    } else if (nowJam == 12 & nowMenit == 30) {
      pumpState = 0;
      delay(500);
    }


    if (nowJam == 14 & nowMenit == 0) {
      pumpState = 1;
      delay(500);
    } else if (nowJam == 14 & nowMenit == 30) {
      pumpState = 0;
      delay(500);
    }


    if (nowJam == 16 && nowMenit == 0) {
      pumpState = 1;
      delay(500);
    } else if (nowJam == 16 & nowMenit == 30) {
      pumpState = 0;
      delay(500);
    }
  } else { // kondisi hari == malam hari
    if (nowJam == 19 & nowMenit == 0) {
        pumpState = 1;
        delay(500);
      }

     if (nowJam == 5 & nowMenit == 0) {
        pumpState = 0;
        delay(500);
      }
  }
}
```

### Library

* DHT
* RTCLib
* LiquidCrystal_I2C
* Modified OneWire [Download Here](/uploads/libraries/OneWireNoResistor-master.zip)
* Modified DallasTemperature [Download Here](/uploads/libraries/Arduino-Temperature-Control-Library-master.zip)