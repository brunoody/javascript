export default class ContatosFrontend {
    constructor(classeForm) {
        this.form = document.querySelector(classeForm);
    }

    ativarValidacao() {        
        if (!this.form) return;        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            alert('teste');
        })
    }
}
