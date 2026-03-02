import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

const BUSINESS_FORM_STORAGE_KEY = 'onboarding.business-form'

type BusinessTime = {
  hour: number
  minute: number
}

type BusinessLapse = {
  open: BusinessTime
  close: BusinessTime
}

type BusinessScheduleDay = {
  enabled: boolean
  lapses: BusinessLapse[]
}

type BusinessLocation = {
  lat: number
  lng: number
}

export type BusinessFormData = {
  name: string
  email: string
  slug: string
  minimum: number
  tax_type: string
  tax: number
  delivery_price: number
  service_fee: number
  schedule: BusinessScheduleDay[]
  enabled: boolean
  location: BusinessLocation | null
  timezone: string
  address: string
  phone: string
  header: string
  logo: string
  description: string
}

type BusinessFormContextValue = {
  businessForm: BusinessFormData
  setBusinessForm: Dispatch<SetStateAction<BusinessFormData>>
  resetBusinessForm: () => void
}

const defaultScheduleDay = (): BusinessScheduleDay => ({
  enabled: true,
  lapses: [
    {
      open: { hour: 0, minute: 0 },
      close: { hour: 23, minute: 59 },
    },
  ],
})

export const createDefaultBusinessForm = (): BusinessFormData => ({
  name: '',
  email: '',
  slug: '',
  minimum: 0,
  tax_type: '2',
  tax: 0.16,
  delivery_price: 2500,
  service_fee: 0,
  schedule: Array.from({ length: 7 }, defaultScheduleDay),
  enabled: false,
  location: null,
  timezone: 'America/Guyana',
  address: '',
  phone: '',
  header: '',
  logo: '',
  description: '',
})

const getInitialBusinessForm = (): BusinessFormData => {
  if (typeof window === 'undefined') {
    return createDefaultBusinessForm()
  }

  const storedValue = window.localStorage.getItem(BUSINESS_FORM_STORAGE_KEY)

  if (!storedValue) {
    return createDefaultBusinessForm()
  }

  try {
    const parsedValue = JSON.parse(storedValue) as Partial<BusinessFormData>
    const defaultValue = createDefaultBusinessForm()

    return {
      ...defaultValue,
      ...parsedValue,
      schedule:
        parsedValue.schedule && parsedValue.schedule.length > 0
          ? parsedValue.schedule
          : defaultValue.schedule,
      location: parsedValue.location ?? null,
    }
  } catch {
    return createDefaultBusinessForm()
  }
}

const BusinessFormContext = createContext<BusinessFormContextValue | undefined>(
  undefined,
)

type BusinessFormProviderProps = {
  children: ReactNode
}

export function BusinessFormProvider({
  children,
}: BusinessFormProviderProps) {
  const [businessForm, setBusinessForm] = useState<BusinessFormData>(
    getInitialBusinessForm,
  )

  useEffect(() => {
    window.localStorage.setItem(
      BUSINESS_FORM_STORAGE_KEY,
      JSON.stringify(businessForm),
    )
  }, [businessForm])

  const resetBusinessForm = () => {
    setBusinessForm(createDefaultBusinessForm())
  }

  return (
    <BusinessFormContext.Provider
      value={{ businessForm, setBusinessForm, resetBusinessForm }}
    >
      {children}
    </BusinessFormContext.Provider>
  )
}

export function useBusinessForm() {
  const context = useContext(BusinessFormContext)

  if (!context) {
    throw new Error('useBusinessForm must be used within a BusinessFormProvider')
  }

  return context
}
