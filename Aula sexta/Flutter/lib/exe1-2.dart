import 'package:flutter/material.dart';
void main() => runApp(MaterialApp(home: Home()));
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.alternate_email),
        title: const Text('Venda de laranjas'),
      ),
      body:
      const Center(
        child:
         Text(
          'Aleander',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.amber,
            fontSize: 30,
            fontWeight: FontWeight.bold,
        ),
      ),
      ),
      backgroundColor: Colors.blue[900],
      floatingActionButton: const FloatingActionButton(
        onPressed: null,
        tooltip: 'Vender',
        child: Icon(Icons.alarm_add_rounded),
      ),
    );
  }
}
