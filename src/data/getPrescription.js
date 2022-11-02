const recetas = [
  {
    alt: 'pizza',
    short_img:
      'https://media.istockphoto.com/vectors/pizza-icon-vector-id166757566?s=612x612',
    id: 50,
    short_tittle: 'PIZZA',
    short_description:
      'Pizza de champiñones con patas y tomates rellenas de queso y pollo',
    tittle: 'PIZZA',
    img: 'https://media.istockphoto.com/vectors/pizza-icon-vector-id166757566?s=612x612',
    ingrediente: [
      'Empanadas',
      'Canapés',
      'Bocadillos y sándwiches',
      'Cremas para untar'
    ],
    preparacion: [
      'En el amasado hay que unir la harina y la sal con el agua con levadura disuelta. Amasar con tranquilidad, si? Y vas a ir poniendo el agua de a poco. Así vas a poder lograr una masa homogénea, pareja, hermosa y todo eso. El gran tip es que no te apures en este paso. Si sentís que se te pega la masa a tus dedos o a la mesada, echale un poco más de harina. Pero de a poco',
      'Hay que agregar el aceite de a poco, como hiciste con el agua, una vez que ya hayas obtenido una masa elástica y homogénea, sin grumos. Y una vez que se suma el aceite, se vuelve a amasar para que todos los ingredientes se unan bien.',
      'Pre-hornear la masa para pizza! El truco es meter la masa ya extendida pero sin ningún ingrediente de 5 a 6 minutos en el horno, lo justo para que pierda un poco de elasticidad y listo. De esta manera vas a conseguir quitarle humedad a la masa y que así va a quedar mucho más crujiente.',
      'Es mejor usar tomate fresco. Buscamos que la salsa de tomate sea lo más densa posible, y por lo tanto, tenga menor contenido en agua. De esta forma se busca no humedecer mucho la masa y conseguir ese toque crujiente que tanto nos gusta.',
      'En cuanto a los ingredientes: cada persona siempre tiene sus preferidos, según los gustos, pero hay un aspecto clave: menos es más! Es decir, mejor que sean pocos ingredientes. Algo que suele ocurrir es poner muchos ingredientes y eso hace que no se hagan todos por igual y se mezclen muchos sabores.'
    ]
  },
  {
    alt: 'pan',
    short_img:
      'https://thumbs.dreamstime.com/b/rebanada-cuadrada-de-pan-entero-fresco-de-la-comida-del-grano-textura-detallada-del-pan-77559398.jpg',
    id: 51,
    short_tittle: 'PAN',
    short_description:
      'Pizza de champiñones con patas y tomates rellenas de queso y pollo',
    tittle: 'PAN',
    img: 'https://thumbs.dreamstime.com/b/rebanada-cuadrada-de-pan-entero-fresco-de-la-comida-del-grano-textura-detallada-del-pan-77559398.jpg',
    ingrediente: [
      'Risottos',
      'Arroces sueltos',
      'Paellas',
      'Arroces con carne'
    ],
    preparacion: [
      'En el amasado hay que unir la harina y la sal con el agua con levadura disuelta. Amasar con tranquilidad, si? Y vas a ir poniendo el agua de a poco. Así vas a poder lograr una masa homogénea, pareja, hermosa y todo eso. El gran tip es que no te apures en este paso. Si sentís que se te pega la masa a tus dedos o a la mesada, echale un poco más de harina. Pero de a poco',
      'Hay que agregar el aceite de a poco, como hiciste con el agua, una vez que ya hayas obtenido una masa elástica y homogénea, sin grumos. Y una vez que se suma el aceite, se vuelve a amasar para que todos los ingredientes se unan bien.',
      'Pre-hornear la masa para pizza! El truco es meter la masa ya extendida pero sin ningún ingrediente de 5 a 6 minutos en el horno, lo justo para que pierda un poco de elasticidad y listo. De esta manera vas a conseguir quitarle humedad a la masa y que así va a quedar mucho más crujiente.',
      'Es mejor usar tomate fresco. Buscamos que la salsa de tomate sea lo más densa posible, y por lo tanto, tenga menor contenido en agua. De esta forma se busca no humedecer mucho la masa y conseguir ese toque crujiente que tanto nos gusta.',
      'En cuanto a los ingredientes: cada persona siempre tiene sus preferidos, según los gustos, pero hay un aspecto clave: menos es más! Es decir, mejor que sean pocos ingredientes. Algo que suele ocurrir es poner muchos ingredientes y eso hace que no se hagan todos por igual y se mezclen muchos sabores.'
    ]
  },
  {
    alt: 'nuggets',
    short_img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVmcBeRSkw4_Jbuj6jW36FMz8_o9wlBjDfQ&usqp=CAU',
    id: 52,
    short_tittle: 'NUGGETS',
    short_description:
      'Pizza de champiñones con patas y tomates rellenas de queso y pollo',
    tittle: 'NUGGETS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVmcBeRSkw4_Jbuj6jW36FMz8_o9wlBjDfQ&usqp=CAU',
    ingrediente: ['Pollo', 'Pavo', 'Conejo', 'Pato'],
    preparacion: [
      'En el amasado hay que unir la harina y la sal con el agua con levadura disuelta. Amasar con tranquilidad, si? Y vas a ir poniendo el agua de a poco. Así vas a poder lograr una masa homogénea, pareja, hermosa y todo eso. El gran tip es que no te apures en este paso. Si sentís que se te pega la masa a tus dedos o a la mesada, echale un poco más de harina. Pero de a poco',
      'Hay que agregar el aceite de a poco, como hiciste con el agua, una vez que ya hayas obtenido una masa elástica y homogénea, sin grumos. Y una vez que se suma el aceite, se vuelve a amasar para que todos los ingredientes se unan bien.',
      'Pre-hornear la masa para pizza! El truco es meter la masa ya extendida pero sin ningún ingrediente de 5 a 6 minutos en el horno, lo justo para que pierda un poco de elasticidad y listo. De esta manera vas a conseguir quitarle humedad a la masa y que así va a quedar mucho más crujiente.',
      'Es mejor usar tomate fresco. Buscamos que la salsa de tomate sea lo más densa posible, y por lo tanto, tenga menor contenido en agua. De esta forma se busca no humedecer mucho la masa y conseguir ese toque crujiente que tanto nos gusta.',
      'En cuanto a los ingredientes: cada persona siempre tiene sus preferidos, según los gustos, pero hay un aspecto clave: menos es más! Es decir, mejor que sean pocos ingredientes. Algo que suele ocurrir es poner muchos ingredientes y eso hace que no se hagan todos por igual y se mezclen muchos sabores.'
    ]
  },
  {
    alt: 'comida-china',
    short_img: 'https://www.pakchn.com/Uploads/6013bfe978db1.jpg',
    id: 53,
    short_tittle: 'COMIDA CHINA',
    short_description:
      'Pizza de champiñones con patas y tomates rellenas de queso y pollo',
    tittle: 'COMIDA CHINA',
    img: 'https://www.pakchn.com/Uploads/6013bfe978db1.jpg',
    ingrediente: [
      'sal',
      'pimienta',
      'oregano',
      'morron',
      'arroz',
      'queso',
      'tomate',
      'mozarella',
      'champiñon',
      'salsa'
    ],
    preparacion: [
      'En el amasado hay que unir la harina y la sal con el agua con levadura disuelta. Amasar con tranquilidad, si? Y vas a ir poniendo el agua de a poco. Así vas a poder lograr una masa homogénea, pareja, hermosa y todo eso. El gran tip es que no te apures en este paso. Si sentís que se te pega la masa a tus dedos o a la mesada, echale un poco más de harina. Pero de a poco',
      'Hay que agregar el aceite de a poco, como hiciste con el agua, una vez que ya hayas obtenido una masa elástica y homogénea, sin grumos. Y una vez que se suma el aceite, se vuelve a amasar para que todos los ingredientes se unan bien.',
      'Pre-hornear la masa para pizza! El truco es meter la masa ya extendida pero sin ningún ingrediente de 5 a 6 minutos en el horno, lo justo para que pierda un poco de elasticidad y listo. De esta manera vas a conseguir quitarle humedad a la masa y que así va a quedar mucho más crujiente.',
      'Es mejor usar tomate fresco. Buscamos que la salsa de tomate sea lo más densa posible, y por lo tanto, tenga menor contenido en agua. De esta forma se busca no humedecer mucho la masa y conseguir ese toque crujiente que tanto nos gusta.',
      'En cuanto a los ingredientes: cada persona siempre tiene sus preferidos, según los gustos, pero hay un aspecto clave: menos es más! Es decir, mejor que sean pocos ingredientes. Algo que suele ocurrir es poner muchos ingredientes y eso hace que no se hagan todos por igual y se mezclen muchos sabores.'
    ]
  },
  {
    alt: 'cajas-chinas',
    short_img: 'https://www.pakchn.com/Uploads/6002644d8f26d.jpg',
    id: 54,
    short_tittle: 'CAJAS CHINAS',
    short_description:
      'Pizza de champiñones con patas y tomates rellenas de queso y pollo',
    tittle: 'CAJAS CHINAS',
    img: 'https://www.pakchn.com/Uploads/6002644d8f26d.jpg',
    ingrediente: ['Cerdo', 'Ternera', 'Vaca', 'Lomo'],
    preparacion: [
      'En el amasado hay que unir la harina y la sal con el agua con levadura disuelta. Amasar con tranquilidad, si? Y vas a ir poniendo el agua de a poco. Así vas a poder lograr una masa homogénea, pareja, hermosa y todo eso. El gran tip es que no te apures en este paso. Si sentís que se te pega la masa a tus dedos o a la mesada, echale un poco más de harina. Pero de a poco',
      'Hay que agregar el aceite de a poco, como hiciste con el agua, una vez que ya hayas obtenido una masa elástica y homogénea, sin grumos. Y una vez que se suma el aceite, se vuelve a amasar para que todos los ingredientes se unan bien.',
      'Pre-hornear la masa para pizza! El truco es meter la masa ya extendida pero sin ningún ingrediente de 5 a 6 minutos en el horno, lo justo para que pierda un poco de elasticidad y listo. De esta manera vas a conseguir quitarle humedad a la masa y que así va a quedar mucho más crujiente.',
      'Es mejor usar tomate fresco. Buscamos que la salsa de tomate sea lo más densa posible, y por lo tanto, tenga menor contenido en agua. De esta forma se busca no humedecer mucho la masa y conseguir ese toque crujiente que tanto nos gusta.',
      'En cuanto a los ingredientes: cada persona siempre tiene sus preferidos, según los gustos, pero hay un aspecto clave: menos es más! Es decir, mejor que sean pocos ingredientes. Algo que suele ocurrir es poner muchos ingredientes y eso hace que no se hagan todos por igual y se mezclen muchos sabores.'
    ]
  }
]
export default recetas
