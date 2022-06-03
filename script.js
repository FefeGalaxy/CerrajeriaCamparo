function formData() {
  const contacto = document.querySelector(".contact-content")

  contacto.addEventListener(`submit`, handleSubmit)

  async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        "accept": `application/json`
      }
    })
    if (response.ok){
      this.reset
      alert(`Gracias por contactarme, cerrajerias camparo se contactara contigo pronto`)
    }
  }
}
  formData();


  function main(){
    const headerEl = document.querySelector(".header-content");
    headerContent(headerEl);
    }
    main();

    var sound = new Audio();
    sound.src = "./img/sonido.mp3"