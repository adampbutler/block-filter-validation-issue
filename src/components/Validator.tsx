'use client'

import React from 'react'
import { Button, useForm } from '@payloadcms/ui'
export type ValidatorProps = { children?: React.ReactNode; onClickHandler?: () => void }

/**
 * Validator is a component that renders a button to validate the form.
 * @param {ValidatorProps} props - The props for the component.
 * @param {() => void} props.onClickHandler - The function to be called when the button is clicked.
 */
export const Validator = ({ onClickHandler }: ValidatorProps) => {
  const { submit } = useForm()

  const validateForm = async () => {
    await submit({ skipValidation: false })
    onClickHandler?.()
  }

  return (
    <div>
      <Button buttonStyle="secondary" onClick={validateForm}>
        Validate
      </Button>
    </div>
  )
}
