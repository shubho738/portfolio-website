
'use client'

import {useEffect} from 'react'
import toast from 'react-hot-toast'
import { useForm, ValidationError } from '@formspree/react'

import StyledHeading from './ui/StyledHeading'
import Input from './ui/Input'
import Button from './ui/Button'


const Contact = () => {

  const [state, handleSubmit, reset] = useForm("xpzvrypy")


  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for reaching out!", {id: "messageSent"})
     reset()
    }
  }, [state.succeeded, reset])


  return (
    <section
      id="contact"
      className="pt-8 pb-24"
    >
      <div className="container">
        <div
          className="space-y-16"
        >
          <StyledHeading
            text="Contact"
            level={2}
            size="text-5xl"
          />
         <div
           className="bg-neutral-md text-neutral-dark py-12 px-4 sm:px-12 rounded-md max-w-4xl hover:shadow-md"
          >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-12"
          >
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              disabled={state.submitting}
              customStyles="w-full"
            />

            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />

            <Input
              id="message"
              name="message"
              type="textarea"
              placeholder="Message"
              disabled={state.submitting}
              rows={8}
              customStyles="w-full"
            />

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />

            <Button
              label="Submit"
              disabled={state.submitting}
              isLoading={state.submitting}
            />
          </form>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
