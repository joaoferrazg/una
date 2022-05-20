import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Home(),
        debugShowCheckedModeBanner: false,
      ),
    );

class Home extends StatelessWidget {
  final String nome = "Aleander", dia = "Sexta feira";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: RichText(
          textAlign: TextAlign.center,
          textDirection: TextDirection.ltr,
          text: TextSpan(
            text: "Olá, ",
            style: const TextStyle(
              color: Colors.green,
              fontSize: 30,
              fontWeight: FontWeight.bold,
              backgroundColor: Colors.white,
            ), //TextStyle.
            children: <TextSpan>[
              TextSpan(
                text: nome,
                style: const TextStyle(
                  color: Colors.blue,
                  decoration: TextDecoration.underline,
                  decorationColor: Colors.red,
                  decorationStyle: TextDecorationStyle.double,
                ),
              ),
              TextSpan(
                text: '\nHoje é $dia!',
                style: const TextStyle(
                  color: Colors.red,
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  backgroundColor: Colors.yellow,
                ), //TextStyle.
              ),
              const TextSpan(
                text: '! \nBom dia!',
              ),

            ],
          ),
        ),
      ),
      backgroundColor: Colors.black,

    );
  }
}
