function ispisImena (prvo, drugo, trece) {
    console.log(prvo, drugo, trece);
}

const x = ['Ivan', 'Marija', 'David', /*'Luka', 'Ivana'*/]; //--> ide samo do zadane vrijednosti (treće)

ispisImena(...x);