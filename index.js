var x = 5,
  y = 10,
  z = -12;
var prenom = "Pierre",
  nom = "Giraud",
  dpt = 83;
var homme = true;
var n = null;
var u = undefined;
var nn = NaN;

x += 2; // x = x + 2;

alert(
  "Varible x : " +
    typeof x +
    "\nVariable y :" +
    typeof y +
    "\nVariable a : " +
    typeof a +
    "\nVariable n :" +
    typeof n +
    "\nVariable u : " +
    typeof u +
    "\nVariable nn : " +
    typeof nn
);

if (x > y) {
  console.log("yes");
} else {
  console.log(x);
}

///////////////////////CONCATENATION//////////////////////////////////

var x = 4 + 2 + "1";
var y = "1" + 2 + 4;
var z = 2 + "un" + 4;

alert("Variable : " + x + typeof x + "\nVariable : " + y + "\nVariable : " + z);

////////////////// CONDITION JS /////////////////////////////////////

var x = 7,
  y = 14;

var vrai = x < y;
var faux = 14 <= 7;
var egalval = 4 == "4";
var egalvaltype = 4 === "4";

var diffval = 4 != "4";
var diffvaletype = 4 !== "4";

alert(
  "vrai stock : " +
    vrai +
    "\nFaux stock : " +
    faux +
    "\nEgalval stock : " +
    egalval +
    "\nEgalevaltype stock : " +
    egalvaltype +
    "\nDiffval stock : " +
    diffval +
    "\nDiffvaletype stock : " +
    diffvaletype
);

//////////////////// IF ELSE SWITCH ///////////////////////

var heure = "neuf";

if ((typeof heure == "number") == true) {
  if (heure < 12 == true) {
    alert("C'est le matin");
  } else if ((heure == 12) == true) {
    alert("Il est midi");
  } else if (heure <= 18 == true) {
    alert("C'est l'aprés midi");
  } else {
    alert("Cest le soir");
  }
} else {
  alert("Mauvais type de valeurs");
}

////////////////// OPERATEURS LOGIQUES //////////////////////

var heure = 26;

if (heure < 0 || heure > 24 == true) {
  alert("L'heure est invalide");
} else {
  alert("L'heure semble valide");
}

var heure = 18;

if (!(heure <= 16) == true) {
  alert("Il est plus de 16h");
} else {
  alert("Il est moins de 16h");
}

///////////////// SIMPLIFICATIONS DES CONDITIONS /////////////

var x = 6,
  y = "";

if (x) {
  alert("x est évaluée à true par le JavaScript");
}

if (y) {
  alert("y est évaluée à true");
} else {
  alert("y est évaluée à false");
}

///////////////// CONDITIONS TERNAIRES //////////////////////

var heure = 19;
bon = "";

if (heure <= 18) {
  alert("Bonjour");
} else {
  alert("Bonsoir");
}

bon = heure <= 18 ? "Bonjour" : "Bonsoir";
alert(bon);

///////////////// SWITCH //////////////////////////////////

var heure = 10;

switch (heure) {
  case 8:
    alert("Il est 8 h");
    break;
  case 9:
    alert("Il est 9 h");
    break;
  case 10:
    alert("Il est 10 h");
    break;
  case 11:
    alert("Il est 11 h");
    break;
  case 12:
    alert("Il est 12 h");
    break;
  default:
    alert("Rien");
    // }

    /////////////// LES BOUCLES //////////////////////////////

    var x = 0;
    (xprime = 0), (alpha = 10), (alphaprime = 10);

    var y = x++;
    var beta = alpha--;

    var yprime = ++xprime;
    var betaprime = --alphaprime;

    alert(
      "y : " +
        y +
        "\nx : " +
        x +
        "\nalpha : " +
        alpha +
        "\nyprime : " +
        yprime +
        "\nbeta : " +
        beta +
        "\nxprime : " +
        xprime +
        "\nbetaprime : " +
        betaprime +
        "\nalphaprime : " +
        alphaprime
    );

    do {
      alert("x vaut : " + x);
      x--;
    } while (x > 10);

    var i = "";

    for (i = 0; i < 11; i++) {
      alert("i contient la valeur :" + i);
    }

    //////////////////// LES FONCTIONS /////////////////////

    function mult(x, y) {
      return x * y;
    }

    var resulta1 = mult(5, 10);
    var resulta2 = mult(-4, 60);
    resulta1 += 2;
    alert(resulta1);

    ////////////////// LES OBJETS /////////////////////////

    var primitive = "Je suis une valeur primitive";

    var moi = {
      prenom: "Pierre",
      nom: "Giraud",
      age: 25,

      identite: function () {
        return (
          "Prénom : " +
          this.prenom +
          "\nNom : " +
          this.nom +
          "\nAge : " +
          this.age
        );
      },
    };

    alert(moi.identite());

    ///////////// VALEURS PRIMITIVES ET OBJETS ///////////

    var primitive = "Je suis une valeur primitive";
    var longueur_prim = primitive.length;
    var maj_prim = primitive.toUpperCase();

    var chaine = new String("Je suis un objet");
    var maj_chaine = chaine.toUpperCase();

    alert(
      "longueur de primitive : " +
        longueur_prim +
        "\nPrimitive en maj :" +
        maj_prim +
        "\nChaine en maj : " +
        maj_chaine
    );

    var prime = 24;

    ///////////////// CREER DES OBJETS ////////////////////////

    var obj_cree = new Object();

    obj_cree.prenom = "Pierre";
    obj_cree.nom = "Giraud";
    obj_cree.age = 25;

    alert(obj_cree.prenom);

    var moi = {
      prenom: "Pierre",
      nom: "Giraud",
      age: 25,

      id: function () {
        return this.prenom + " " + this.nom;
      },
    };

    alert(moi.id());

    function Identite(p, n, a) {
      this.prenom = p;
      this.nom = n;
      this.age = a;
    }

    var pierre = new Identite("Pierre", "Giraud", 25);
    var victor = new Identite("Victor", "Durand", 24);

    alert("Age de Pierre : " + pierre.age + "\nAge de Victor : " + victor.age);
}
