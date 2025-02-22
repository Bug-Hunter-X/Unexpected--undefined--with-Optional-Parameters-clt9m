function printName(name: string = 'Anonymous'): void {
  console.log(name);
}

printName(); // This will print 'Anonymous'

function printName2(name?: string): void {
  console.log(name || 'Anonymous');
}

printName2(); // This will also print 'Anonymous' 