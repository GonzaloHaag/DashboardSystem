/* La idea es ejecutar un npm run seed y que se ejecute mi semilla
Esta seria una app de nodejs **/

import prisma from '../lib/prisma';
import { hashSync } from 'bcrypt';
async  function main() {
    // Eliminar y llenar contenido de mis tablas 
    await prisma.sistema.deleteMany();
    await prisma.usuario.deleteMany();

    await prisma.sistema.create({
        data : {
             id:1,
             name:'El pocho mates',
             logoImage:'/logo-pocho.webp',
             pais:'AR'
        }
    });

    await prisma.usuario.createMany({
        data : [
            {
                email:'elpochomates13@gmail.com'.toLowerCase(),
                password:hashSync('prueba123',3),
                username:'Elpocho',
                role:'Admin',
                sistemaId:1
            },
            {
                email:'prueba@gmail.com'.toLowerCase(),
                password:hashSync('prueba123',3),
                username:'LaloH',
                role:'Superadmin'
            },
        ]
    });

    console.log('Seed ejecutado correctamente');
}
(() => {
    if(process.env.NODE_ENV === 'production') return; // Que no llegue a produccion
    main();
})();