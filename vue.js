
Vue.component('nav-lateral', {
  props: ['lista'],
  template: `
    <ul class="nav mt-2 flex-column align-content-center" >

      <li class="nav-item position-relative text-center px-1 " style="width: 80px; max-width: 80px;" v-for="(list, indice) in lista" :key="indice">
        <div class="text-black rounded menu-lateral" >
            <i :class="list.icono" class="fs-4"></i>
            <p style="font-size: 10px;" class="pb-2">{{ list.item }}</p>
        </div>                  
      </li>
      
    </ul>
  `
})


let app = new Vue({
  el: '#app',
  data() {
    return {
      List_menu_profecionales: ['Inicio','Empleos','Cursos y retos','Preguntas','Profesores','Bootcamp'],
      List_menu_empresas: ['Inicio','Publicar Empleo','Nuestro Proceso','Precios','Pruebas Online','Nomina','Blog','Comercial','Calculadora de salario'],
      List_menu_lateral:[
                        { item : 'Empleos' ,icono :'bi bi-briefcase active'},
                        { item : 'Postulaciones' ,icono :'bi bi-file-earmark-check'},
                        { item : 'cursos' ,icono :'bi bi-controller'},
                        { item : 'Preguntas' ,icono :'bi bi-chat-text'},
                        { item : 'Bootcamp' ,icono :'bi bi-braces'},
                        { item : 'Premios' ,icono :'bi bi-gem'},
                        { item : 'Tu CV' ,icono :'bi bi-file-earmark-person'}],

      List_menu_filtro: ['Area', 'Cargo', 'Salario', 'Ubicación'],

      habilidades:[
                  {titulo:'Angular',icono:'devicon-angularjs-plain'},
                  {titulo:'typescript',icono:'devicon-typescript-plain'},
                  {titulo:'javascript',icono:'devicon-javascript-plain'},
                  {titulo:'vue.js',icono:'devicon-vuejs-plain'},
                  {titulo:'python',icono:'devicon-python-plain'},
                  {titulo:'Node.js',icono:'devicon-nodejs-plain'},
                  {titulo:'Java',icono:'devicon-java-plain'},
                  {titulo:'Linux',icono:'devicon-linux-plain'}
      ],

      beneficios:[
          /*1*/   {titulo:'Cursos de inglés',icono:'dbi bi-globe2'},
          /*2*/   {titulo:'Trabajo remoto',icono:'bi bi-geo-alt'},
          /*3*/   {titulo:'Fiesta de fin de año',icono:'bi bi-emoji-sunglasses'},
          /*4*/   {titulo:'Vesting',icono:'bi bi-cash'},
          /*5*/   {titulo:'Medicina prepagada',icono:'bi bi-heart'},
          /*6*/   {titulo:'Horario Flexible',icono:'bi bi-watch'},
          /*7*/   {titulo:'Certificaciones',icono:'bi bi-file-earmark-check'},
          /*8*/   {titulo:'Capacitaciones',icono:'bi bi-clipboard-check'}
      ],

      empleos_todos : [
        { titulo : 'Desarrollador Fullstack' ,
          logo : 'https://peaku.co/img/company.svg',
          empresa:'Confidencial',
          ubicacion:'Remoto en Colombia',
          salario:'1.4 M COP',
          vacantes : 1,
          publicacion:'about 22 hours ago',
          habilidades : [1,4,6,8], //numero de 1 a 8
          beneficios :[2,3,5,6] // numero de 1 a 8
        },

        { titulo : 'Desarrollador back-end' ,
          logo : 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/75862/logo_keifi.jpg',
          empresa:'Keifi Technologies Colombia SAS',
          ubicacion:'Bogota - Colombia',
          salario:'1.4M -2.0 M COP',
          vacantes : 2,
          publicacion:'about 20 hours ago',
          habilidades : [2,3,5,7,], //numero de 1 a 8
          beneficios :[1,4,6] // numero de 1 a 8
        },

        { titulo : 'Técnico en Servicios Farmacéuticos' ,
          logo : 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png',
          empresa:'OFFIMEDICAS S.A',
          ubicacion:'Bucaramanga - Colombia',
          salario:'1.5 M COP',
          vacantes : 10,
          publicacion:'1 day ago',
          habilidades : ['Herramientas Ofimáticas','text writing','assertive communication'], //numero de 1 a 8
          beneficios :[7,3,8] // numero de 1 a 8
        },

        { titulo : 'Regente de Farmacia' ,
          logo : 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png',
          empresa:'OFFIMEDICAS S.A',
          ubicacion:'Cali - Colombia',
          salario:'1.9 M COP',
          vacantes : 5,
          publicacion:'1 day ago',
          habilidades : ['result oriented','text writing','Supervisión'], //numero de 1 a 8
          beneficios :[7,3,8] // numero de 1 a 8
        },

        { titulo : 'Administrador de infraestructura' ,
          logo : 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/32374/DATACRM_logo.png',
          empresa:'DATACRM',
          ubicacion:'Remoto en Colombia',
          salario:'2.5 M - 3.0 M COP',
          vacantes : 1,
          publicacion:'3 day ago',
          habilidades : ['sql',8], //numero de 1 a 8
          beneficios :[6,5] // numero de 1 a 8
        },

        { titulo : 'Representante de Desarrollo de Ventas' ,
          logo : 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/2078/peaku.jfif',
          empresa:'PeakU Inc.',
          ubicacion:'Remoto en Colombia',
          salario:'3 M - 5 M COP',
          vacantes : 1,
          publicacion:'3 day ago',
          habilidades : ['cold prospecting','B2B sales','negotiation skills'], //numero de 1 a 8
          beneficios :[1,2,6,3] // numero de 1 a 8
        },

        { titulo : 'Agente de grupos Backoffice' ,
          logo : 'https://peaku.co/img/company.svg',
          empresa:'Colombian journeys SAS',
          ubicacion:'Bogota - Colombia',
          salario:'1.5 M - 2.5 M COP',
          vacantes : 1,
          publicacion:'4 day ago',
          habilidades : ['commercial advisor','serv. to the client'], //numero de 1 a 8
          beneficios :[2,3,6,5] // numero de 1 a 8
        },

        { titulo : 'Senior back end developer - Knowledge Graph' ,
          logo : 'https://peaku.co/img/company.svg',
          empresa:'20 Moves',
          ubicacion:'Cali - Colombia',
          salario:'8 M - 15 M COP',
          vacantes : 3,
          publicacion:'8 day ago',
          habilidades : [5,3,'graphql'], //numero de 1 a 8
          beneficios :[] // numero de 1 a 8
        }

      ],
      empleos:[],
      ubicaciones :['Todas'],
      ubicaciones_select :'Todas',
      palabra_buscar:''
    }
  },
  beforeMount() {
    this.empleos=this.empleos_todos;
    
    var aux = {};
    for (var i = 0; i < this.empleos_todos.length; i++) {
      var name = this.empleos_todos[i].ubicacion;
      if (!aux[name]) {
        aux[name] = true;
        this.ubicaciones.push(name);
      }
    }

  },
  methods: {
    filtrar(){
      if(this.ubicaciones_select == 'Todas'){
        this.empleos = this.empleos_todos;
      }
      else{
        this.empleos = this.empleos_todos.filter(e => e.ubicacion == this.ubicaciones_select);
      }
    },
    buscar(){
      var palabra = this.palabra_buscar.toLowerCase();
      this.empleos = this.empleos_todos.filter(e => e.titulo.toLowerCase().includes(palabra) || e.ubicacion.toLowerCase().includes(palabra) || e.empresa.toLowerCase().includes(palabra));
    }
  }
})


