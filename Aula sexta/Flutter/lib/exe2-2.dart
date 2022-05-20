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
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home),
        title: const Text('Página Inicial'),
      ),
      body: Center(
        child: Row(
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
      ),
      backgroundColor: Colors.black,
      floatingActionButton: const FloatingActionButton(
        onPressed: null,
        tooltip: 'Exemplo de botão',
        child: Icon(Icons.add),
      ),
    );
  }
}
