const { createApp } = Vue;


createApp({
    data(){
        return{
        
            vista: "home",

            home,

            indumentaria:[],
            textoIndumentaria,

            detalleDelProducto: null,
            carrito:[],
            
            ubi: "",
            video:true,
            canvas:true
            
        }
    },

    methods:{

        
        cambiarVista(seccion){
            this.vista = seccion;
        },




        agregarCarrito(producto){


            const productoExistente = this.carrito.find(item => item.id === producto.id)

            if(productoExistente){
                productoExistente.cantidad++
            }else{
                this.carrito.push({
                    ...producto,
                    cantidad:1
                })
            }
        },




        eliminarProducto(id){

            this.carrito = this.carrito.filter(item => item.id !== id)
            
        },




        aumentarCantidad(producto){
            producto.cantidad++
        },




        disminuirCantidad(producto){
            if(producto.cantidad > 1){
                producto.cantidad--
            }else{
                this.eliminarProducto(producto.id)
            }
        },

        mostrarDetalle(producto){
            this.detalleDelProducto = producto
            this.vista = "detallesProducto"
        },
        

        obtenerGeocalizacion(){
            this.ubi="Cargando"
            navigator.geolocation.getCurrentPosition(this.success,this.error)
        },
        success(position){
            const latitud = position.coords.latitude
            const longitud = position.coords.longitude


            this.ubi = `Latitud: ${latitud} Longitud: ${longitud}`
            console.log(this.ubi)
        },
        error(){
            this.ubi = "No se pudo obtener ubicacion"
        },

        async abrirCamara() {
            try {
                    const stream = await navigator.mediaDevices.getUserMedia({video: true});

                    this.$refs.video.srcObject = stream;
                    } catch(error) {
                        console.log(error);
                    }
        },

        capturarFoto() {
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;

        const contexto = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        contexto.drawImage(video, 0, 0);

        console.log("Anda")
    }


        

    },

    mounted() {
            fetch("traerProductos.php")
            .then(response => response.json())
            .then(data => {
                this.indumentaria = data;
            })
            .catch(error => console.log(error));
        }



}).mount("#app")    

