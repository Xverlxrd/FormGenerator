export interface FormFieldOption {
    value: unknown
    label: string
}

export interface FormFieldBase {
    name: string
    type: 'input' | 'select' | 'checkbox' | 'textarea'
    label?: string
    attributes?: Record<string, unknown>
}

export interface InputField extends FormFieldBase {
    type: 'input'
    attributes?: {
        type?: string
        placeholder?: string
        required?: boolean
    }
}

export interface SelectField extends FormFieldBase {
    type: 'select'
    options: FormFieldOption[]
}

export interface CheckboxField extends FormFieldBase {
    type: 'checkbox'
}

export interface TextareaField extends FormFieldBase {
    type: 'textarea'
    attributes?: {
        rows?: number
        placeholder?: string
    }
}

export type FormField = InputField | SelectField | CheckboxField | TextareaField

export interface FormConfig {
    fields: FormField[]
    submitText?: string
    cancelText?: string
}