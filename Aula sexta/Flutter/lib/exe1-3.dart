import 'package:flutter/material.dart';
void main() => runApp(MaterialApp(home: Home()));
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home),
        title: const Text('Página Inicial'),
      ),
      body: Center(
        child:
      Image.network(
      'https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif',
            ),
      ),
      backgroundColor: Colors.blue[900],

      floatingActionButton: const FloatingActionButton(
        onPressed: null,
        tooltip: 'Exemplo de botão',
        child: Icon(Icons.add),
      ),

    );
  }
}