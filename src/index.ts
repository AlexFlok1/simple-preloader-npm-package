//import '../src/main.css';

interface Preloader_Params{
    after_delay?:Number;
    background_color?:String;
    duration?:Number;
}

interface TextPreloaderBox {
    color?:String,
    text?:String,
}

interface PreloaderBox {
    background_color?:String,
    text?:TextPreloaderBox,
    shadow?:String,
}

export class Preloader {

    ActivatePreloader( params: Preloader_Params, box_params:PreloaderBox ): String {

        let el = document.createElement('div');
        el.setAttribute( "id", "EASY-COOL-PRELOADER" );
        el.setAttribute("style",`position:fixed; top:0; left:0; height:100vh; width:100%; z-index:50000; background: ${ params.background_color || 'rgba(0,0,0,.5)' }`);
        document.getElementsByTagName('body')[0].appendChild(el);
        //create preloader box
        let el_box = document.createElement('div');
        el_box.setAttribute( 'id', 'Preloader-Box' );
        el_box.setAttribute( 
            'style', 
            `position:absolute;
             text-align:center; 
             top:46%;
             left:46%;
             width:8%;
             height:8%;
             background: ${ box_params.background_color || 'rgba(255,255,255,0)' };
             border-radius:0px;` 
            );
        el.appendChild( el_box );

        //add svg
        var el_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        el_svg.setAttribute('style', "height:100%; width:100%");
        el_box.appendChild(el_svg);
        //create preloader animation
        var el_preloader = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        el_preloader.setAttribute('cx', '55%');
        el_preloader.setAttribute('cy', '40%');
        el_preloader.setAttribute('r', '20');
        el_preloader.setAttribute('id', 'Preloader-Anm');
        el_preloader.setAttribute(
            'style', 
            `fill:transparent;
            stroke-width:5;
            stroke:black;
            stroke-dasharray: 1000;
            transform-origin:center;
            transform:rotateZ(-90deg)`
            );
        el_preloader.animate( [
            {
                strokeDashoffset:1000
            },
            {
                strokeDashoffset:500
            }
        ],{ duration:2000, iterations:Infinity,} )
         el_svg.appendChild(el_preloader);
        return 'Preloader is in process!';
    }
    
    StopPreloader(): String {

        document.getElementById('EASY-COOL-PRELOADER')?.remove();
        return 'StopPreloader'

    }


}


