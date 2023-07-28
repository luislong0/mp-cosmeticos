'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormErrorSpan } from './FormErrorSpan'
import axios from 'axios'
import { successNotification } from './Notifiers/Success'
import { RotationSpinner } from './Spinners/RotationSpinner'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Digite seu nome!'),
  phone: z.string().min(1, 'Digite seu telefone!'),
  email: z.string().email('Digite seu email!'),
  description: z.string().min(1, 'Digite sua mensagem!'),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

const maxLength = 500

export function ContactFormBox() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const [description, setDescription] = useState('')

  async function handleSendMessage(data: ContactFormInputs) {
    try {
      const response = await axios.post('/api/sendEmail', {
        to: 'mpcosmeticos.sp@gmail.com, marcio.ap70@hotmail.com',
        subject: `Contato MP Cosméticos`,
        html: `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>

            <h1>${data.name} entrou em contato!</h1>
              

            <h2>Informações do usuário:</h2>
              <p>Nome: ${data.name}</p>
              <p>Email: ${data.email}</p>
              <p>Telefone: ${data.phone}</p>
              <p>Descrição: ${data.description}</p>
          </body>
        </html>
`,
      })

      if (response.status === 200) {
        successNotification('Email de contato enviado com sucesso!')
      }
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="flex w-full flex-col gap-5 rounded-md border-2 border-rose-500 bg-zinc-100 p-5 sm:p-10"
      >
        <span className="text-xl font-bold uppercase text-rose-400">
          Entre em Contato Conosco!
        </span>
        <p className="text-lg font-medium text-zinc-600">
          Por favor, preencha o formulário abaixo com seus detalhes e descreva
          sua consulta. Nós retornaremos o mais breve possível!
        </p>
        <label htmlFor="name" className="flex flex-col gap-2">
          <span className="font-bold text-zinc-800">Nome:</span>
          <input
            type="text"
            id="name"
            className="rounded-md bg-zinc-200 px-5 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Digite seu nome aqui!"
            {...register('name')}
          />
          <FormErrorSpan
            key={errors.name?.message}
            err={errors.name?.message}
          />
        </label>

        <label htmlFor="phone" className="flex flex-col gap-2">
          <span className="font-bold text-zinc-800">Telefone:</span>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            id="phone"
            className="rounded-md bg-zinc-200 px-5 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="(xx) xxxxx-xxxx"
            {...register('phone')}
          />
          <FormErrorSpan
            key={errors.phone?.message}
            err={errors.phone?.message}
          />
        </label>

        <label htmlFor="email" className="flex flex-col gap-2">
          <span className="font-bold text-zinc-800">Email:</span>
          <input
            type="text"
            id="email"
            className="rounded-md bg-zinc-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Digite seu email aqui!"
            {...register('email')}
          />
          <FormErrorSpan
            key={errors.email?.message}
            err={errors.email?.message}
          />
        </label>

        <label htmlFor="description" className="flex flex-col gap-2">
          <span className="font-bold text-zinc-800">Mensagem:</span>
          <textarea
            id="description"
            rows={15}
            maxLength={maxLength}
            className="resize-none rounded-md bg-zinc-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Digite sua mensagem aqui!"
            {...register('description')}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="w-full text-right text-sm text-zinc-500">{`${description.length} de ${maxLength}`}</span>
          <FormErrorSpan
            key={errors.description?.message}
            err={errors.description?.message}
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-rose-400 px-5 py-3 text-lg font-bold text-zinc-100 transition-all hover:scale-105 hover:bg-rose-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <RotationSpinner />
          ) : (
            <span className="flex items-center justify-center gap-2">
              Enviar! <ArrowRight strokeWidth={2} />
            </span>
          )}
        </button>
      </form>
    </div>
  )
}
