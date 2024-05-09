export function TranslateLabel(key: string) {
  let label

  switch (key) {
    case 'sunday':
      label = 'Domingo'
      break
    case 'monday':
      label = 'Segunda-feira'
      break
    case 'tuesday':
      label = 'Terça-feira'
      break
    case 'wednesday':
      label = 'Quarta-feira'
      break
    case 'thursday':
      label = 'Quinta-feira'
      break
    case 'friday':
      label = 'Sexta-feira'
      break
    case 'saturday':
      label = 'Sábado'
      break
  }

  return label
}
