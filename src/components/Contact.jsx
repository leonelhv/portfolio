import { useEffect, useState } from "react"

function Contact() {
  const [formState, setFormState] = useState({})
  const [validForm, setValidForm] = useState(false)

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (formState.name && formState.email && formState.message) {
      return setValidForm(true)
    }
    setValidForm(false)
  }, [formState])

  const submitHandler = (event) => {
    event.preventDefault()
    const config = {
      SecureToken: "6aa2f674-de47-409f-bcda-a1ee55315a6f",
      To: "leonel.huachacav@gmail.com",
      From: `leonel.huachacav@gmail.com`,
      Subject: "Esto es del formulario de contacto",
      Body: `
      <div>
      <h2>Nombres: ${formState.name}</h2>
      <h2>Correo: ${formState.email}</h2>
      <h3>Mensaje:</h3>
      <p>
      ${formState.message}
      </p>
      </div>`,
    }

    if (window.Email && validForm()) {
      window.Email.send(config).then(console.log)
    }
  }
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-24 mb-12">Contacto</h2>

      <form className="flex flex-col gap-2 md:w-1/2 mx-auto" onSubmit={submitHandler}>
        <label className="flex flex-col justify-between " htmlFor="">
          <span className="w-24">Nombres:</span>
          <input type="text" name="name" onChange={changeHandler} value={formState.name || ""} className="text-black px-2" />
        </label>
        <label className="flex flex-col justify-between " htmlFor="">
          <span className="w-24">Correo:</span>
          <input type="text" name="email" onChange={changeHandler} value={formState.email || ""} className="text-black px-2" />
        </label>
        <label className="flex flex-col justify-between " htmlFor="">
          <span className="w-24">Mensaje:</span>
          <textarea type="text" name="message" onChange={changeHandler} value={formState.message || ""} className="text-black w-full" />
        </label>
        <button type="submit" className={`mt-4 bg-sky-600 p-2 rounded-md ${validForm ? "opacity-100" : "opacity-50 cursor-not-allowed"}`} disabled={validForm}>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Contact
