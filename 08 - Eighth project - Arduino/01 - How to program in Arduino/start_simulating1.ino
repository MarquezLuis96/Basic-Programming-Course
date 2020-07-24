int pin13 = 13;
int pin7 = 7;

int milisec = 300;

void setup(){
	pinMode(pin13, OUTPUT);
  	pinMode(pin7, OUTPUT);
}

void loop(){
	digitalWrite(pin13, HIGH);
  	digitalWrite(pin7, LOW);
    delay(milisec);
  	digitalWrite(pin13, LOW);
  	digitalWrite(pin7, HIGH);
  	delay(milisec);
}