import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1x9ZWG6Rq7qliuAWCyBALuzS73gqG4JA",
  authDomain: "nutrienthub-92ac3.firebaseapp.com",
  projectId: "nutrienthub-92ac3",
  storageBucket: "nutrienthub-92ac3.appspot.com",
  messagingSenderId: "803786752256",
  appId: "1:803786752256:web:afc838d06166ef003bf3e5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/*const misProductos = [
    { nombre: "Barra de Proteína Double Chocolate Chunk", precio: "1500", img: "../images/proteinbar1.png", idCat: "Snacks", description: "Las barras de proteína Quest Double Chocolate Chunk proporcionan el doble de chocolate para todos los amantes del chocolate. Lo mejor de todo es que nuestra barra tiene 20g de proteína, 4g de carbohidratos netos y menos de 1g de azúcar por barra.", stock: "10"},
    { nombre: "Barra de Proteína Dipped Cookies and Cream", precio: "1500", img: "../images/proteinbar2.png", idCat: "Snacks", description: "La barra de proteína Quest Cookies & Cream sabe a tu galleta favorita de la infancia. Solo nuestra versión combina galletas proteicas desmenuzadas y trozos con sabor a crema con 21g de proteína, 4g de carbohidratos netos y 1g de azúcar.", stock: "10"},
    { nombre: "Barra de Proteína OatMeal Chocolate Chip",precio: "1300", img: "../images/proteinbar3.png", idCat: "Snacks", description: "MERECES UN TRATO ESPECIAL: La barra proteica de avena con chispas de chocolate Quest sabe como una galleta recién salida del horno de la abuela. Solo nuestra versión combina chips con sabor a chocolate y avena sin gluten con 20g de proteína, 5g de carbohidratos netos y 1g de azúcar.", stock: "10"},
    { nombre: "Barra de Proteína Dipped Chocolate Chip Cookie Dough",precio: "1500", img: "../images/proteinbar4.png", idCat: "Snacks", description: "MERECES UN TRATO ESPECIAL: La barra proteica de masa para galletas con chispas de chocolate Quest sabe como una bola de masa para galletas recién sacada del tazón. Solo nuestra versión está repleta de chispas con sabor a chocolate y tiene 21g de proteína, 4g de carbohidratos netos y 1g de azúcar.", stock: "15"},
    { nombre: "Barra de Proteína Birthday Cake",precio: "1700", img: "../images/proteinbar5.png", idCat: "Snacks", description: "CADA DÍA PUEDE SER TU DÍA ESPECIAL: La barra de proteína Quest Birthday Cake sabe como un trozo de pastel de cumpleaños que puedes disfrutar todos los días. Celebre con 20g de proteína, 4g de carbohidratos netos y menos de 1g de azúcar por barra.", stock: "10"},
    { nombre: "Barra de Proteína Pumpkin Pie",precio: "1300", img: "../images/proteinbar6.png", idCat: "Snacks", description: "Barras de proteína de pastel de manzana Quest. Disfrute del sabor clásico de la tarta de manzana en esta barra de proteínas que contiene manzana seca junto con trozos con sabor a caramelo y graham, está cubierta con una llovizna dulce y proporciona 20g de proteína, 4g de carbohidratos netos y 2g de azúcar por porción.", stock: "8"},
    { nombre: "Barra de Proteína White Chocolate Raspberry",precio: "1700", img: "../images/proteinbar7.png", idCat: "Snacks", description: "Las barritas proteicas de frambuesa y chocolate blanco Quest saben a tarta de frambuesa de tu pastelería favorita. Solo nuestra versión tiene 20g de proteína, 5g de carbohidratos netos y 1g de azúcar por barra.", stock: "12"},
    { nombre: "Barra de Proteína Mint Chocolate Chunk",precio: "1300", img: "../images/proteinbar8.png", idCat: "Snacks", description: "Las barras de proteína con trozos de chocolate y menta saben a una deliciosa hamburguesa de chocolate y menta. Solo nuestra barrita tiene 20g de proteína, 4g de carbohidratos netos y 1g de azúcar por barrita.", stock: "10"},
    { nombre: "Galleta proteica Cinnamon Brown Butter",precio: "2200", img: "../images/proteincookie1.png", idCat: "Snacks", description: "Las galletas proteicas de canela Quest son suaves, masticables y están sazonadas con especias navideñas. Cada galleta tiene 15g de proteína, 2g de carbohidratos netos y menos de 1g de azúcar. No estarán disponibles por mucho tiempo, así que disfruta de este gran sabor mientras puedas.", stock: "15"},
    { nombre: "Galleta proteica Peanut Butter Chocolate Chip",precio: "2500", img: "../images/proteincookie2.png", idCat: "Snacks", description:"Las galletas proteicas de mantequilla de maní Quest te proporcionan una galleta dulce, suave y masticable con 15g de proteína, 5g de carbohidratos netos y 1g de azúcar.", stock: "8"},
    { nombre: "Galleta proteica Chocolate Chip",precio: "2200", img: "../images/proteincookie3.png", idCat: "Snacks", description: "Las galletas proteicas con chispas de chocolate Quest te proporcionan una galleta dulce, suave y masticable con 15g de proteína, 4g de carbohidratos netos y menos de 1g de azúcar.", stock: "10"},
    { nombre: "Galleta proteica White Chocolate Macadami",precio: "2500", img: "../images/proteincookie4.png", idCat: "Snacks", description: "Las galletas proteicas de chocolate blanco con macadamias Quest te proporcionan una galleta dulce, suave y masticable con 15g de proteína, 5g de carbohidratos netos y 1g de azúcar. Además son veganas, ya que no contienen huevos ni leche.", stock: "12"},
    { nombre: "Proteina en polvo Cookies and Cream",precio: "35000", img: "../images/proteinpowder1.png", idCat: "Proteínas", description: "Obtenga 20g de proteína y 2g de carbohidratos netos por porción del delicioso polvo de proteína de cookies and cream de Quest.", stock: "10"},
    { nombre: "Proteina en polvo Vanilla Milkshake",precio: "33000", img: "../images/proteinpowder2.png", idCat: "Proteínas", description:"Disfrute de 24g de proteína, 3g de carbohidratos netos y 1g de azúcar por scoop del el cremoso batido de proteína de vainilla en polvo.", stock: "6"},
    { nombre: "Proteina en polvo Chocolate Milkshake",precio: "33000", img: "../images/proteinpowder3.png", idCat: "Proteínas", description:"Agita tu rutina: el batido de chocolate en polvo Quest te proporciona un delicioso impulso de proteínas con 22g de proteína, 2g de carbohidratos netos y 1g de azúcar por scoop.", stock: "10"},
    { nombre: "Proteina en polvo Peanut Butter",precio: "30000", img: "../images/proteinpowder4.png", idCat: "Proteínas", description:"Obtenga 23g de proteína, 2g de carbohidratos netos y 1g de azúcar por scoop con la deliciosa proteína en polvo Quest Peanut Butter", stock: "9"},
    { nombre: "Creatina Gentech",precio: "21000", img: "../images/creatina1.png", idCat: "Creatinas", description:"Acelera la recuperación de energía durante una sesión de entrenamiento, lo que permite prolongar el ejercicio de alta intensidad. La creatina es la base de la fosfocreatina, sustancia de mayor potencial energético dentro del músculo, que aumenta en un 30% su concentración muscular acelerando los procesos de recuperación energética y prolongando la capacidad de realizar ejercicios de alta intensidad. Aumenta la masa muscular sin influir sobre el tejido graso.", stock: "10"},
    { nombre: "Creatina Star Nutrition",precio: "24000", img: "../images/creatina2.png", idCat: "Creatinas", description:"Ayuda a fabricar más combustible para el músculo en forma de ATP, esto asegura que los músculos trabajen más rápido durante más tiempo, y también que se recuperen más rápido luego del entrenamiento intenso.", stock: "18"},
    { nombre: "Creatina Ena",precio: "26000", img: "../images/creatina3.png", idCat: "Creatinas", description: "Nuestra CREATINA MICRONIZADA es un excelente suplemento pre entrenamiento ya que colabora en la formación de los componentes energéticos, mejora la potencia muscular y retrasa la fatiga muscular, preparando al cuerpo para un mejor rendimiento físico Ha sido demostrado que apoya el crecimiento del tamaño de los músculos, y el aumento de fuerza y poder cuando se la combina con actividades de alta intensidad. MODO DE USO:  Ingesta diaria: 5g aprox. por día (1 cuchara de té colmada) en 200cm3 de agua o jugos para sabor Neutro.", stock: "14"},
    { nombre: "Creatina UltraTech",precio: "33500", img: "../images/creatina4.png", idCat: "Creatinas", description:"Es un suplemento dietario extremadamente útil para personas de todas las edades. Todos se pueden beneficiar del aumento de la vitalidad y la disminución en el tiempo de recuperación después de un esfuerzo físico. Cuando consumís creatina Ultra Tech te aseguras de recuperar la energia y el poder utilizado durante un entrenamiento intenso. Otro importante uso de la creatina es el tratamiento de las lesiones deportivas como los desgarros y estiramientos musculares. La influencia positiva de la creatina en el crecimiento del músculo lleva a una curación mas rápida después de una lesión. Ademas retrasasa la aparición de fatiga, potencia el metabolismo energético y la resistencia en el entrenamiento, y ayuda a elevar la fuerza muscular.", stock: "16"},
    { nombre: "Carbo energy Ena",precio: "11200", img: "../images/energia1.png", idCat: "Energía", description: "ENERGÍA + RECUPERACION + HIDRATACION  CARBO ENERGY es la bebida deportiva por excelencia. Su formula exclusiva mejora tu performance favoreciendo el aporte de energía durante la actividad física. Gracias a la tecnología de ultima generación lograras optimizar la recuperación y llegar a niveles que nunca pensaste. Su osmolaridad es optima, logrando que sea absorbida más rápidamente que el agua por lo que es una excelente fuente de hidratación instantánea, reponiendo minerales y líquidos antes y durante la actividad. Proporciona además sodio, cloruro, potasio y magnesio, que actúan como restauradores de electrolitos.", stock: "10"},
    { nombre: "Cafeína Star Nutrition",precio: "7000", img: "../images/energia3.png", idCat: "Energía", description: "Concentra 200 mg de cafeína anhidra de extrema calidad en capsulas, convirtiéndose en un aliado ideal para potenciar los entrenamientos mas intensos. Es un suplemento que mejora el rendimiento en deportes que requieren esfuerzo intenso e intermitente (como Rugby, futbol y tenis) y en actividades de resistencia (carreras a distancia), disminuyendo la fatiga y permitiendo mantener la actividad con una performance superior durante un periodo más largo de tiempo, ya que aumenta la adrenalina y estimula el sistema nervioso central.  La cafeína también ayuda a la perdida de grasa, su beneficio termogénico colabora en convertir las células grasas almacenadas en energía durante el ejercicio.", stock: "10"},
    { nombre: "Energy Strawberry Gel Ena",precio: "12000", img: "../images/energia2.png", idCat: "Energía", description:"Energy Gel es un repositor energético con sales de rehidratación creado para el entrenamiento diario y la competencia. Energy Gel fue creado específicamente para optimizar el consumo de nutrientes de una manera conveniente, portable y con ricos sabores.", stock: "10"},
]

import {collection, doc, writeBatch} from "firebase/firestore"

const subirProductos = async () => {

    const batch = writeBatch(db)

    const productosRef = collection(db, "productos")

    misProductos.forEach((producto)=>{

        const nuevoDoc = doc(productosRef)

        batch.set(nuevoDoc, producto)
    })

    try {

        await batch.commit();

        console.log("Productos subidos exitosamente")

    } catch(error) {

        console.log("Error subiendo productos:", error)

    }

}

subirProductos()*/