import { useTranslation } from 'react-i18next'

export default function Error403Page() {
  const { t } = useTranslation()
  return (
    <>
      <div className="my-[10rem] grid place-items-center">
        <h1 className="text-2xl font-bold">{t('403.h1') as string}</h1>
        <p>{t('403.p') as string}</p>
      </div>
    </>
  )
}
