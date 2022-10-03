class  Silence extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = "<p>The Silence</p>";
    }

   customElements.define('silence', Silence);
     
}