import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Home(),
        debugShowCheckedModeBanner: false,
      ),
    );

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      home:  Scaffold(
        body:  Container(
          color: Color(0xff258DED),
          alignment: Alignment.center,
          child:  Column(
            children: [

              const Expanded(
                child: FittedBox(
                  fit: BoxFit.contain, // Permite aumentar o tamanho do logo.
                  child: FlutterLogo(),
                ),
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.start,
                children: const [
                  Expanded(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=10',
                      ),
                    ),
                  ),
                  Expanded(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=25',
                      ),
                    ),
                  ),
                  Expanded(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=15',
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}