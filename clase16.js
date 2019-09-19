var signo = prompt('¿Cuál es ti signo?')

switch (signo) {
    case 'acuario':
        console.log('Sería oportuno que comience a implementar las soluciones convenientes a muchos de los obstáculos que se le han presentado en estos días. No se deje estar.')
        break

    case 'aries':
        console.log('Será esencial para este día que empiece a controlar cada una de las emociones y así evitar que afecten de manera negativa su ánimo. ')
        break

    case 'tauro':
        console.log('No desaproveche cada unas de las oportunidades que se le presentarán en el ámbito laboral. Su espíritu de lucha y ambición están en su mejor momento.')
        break

    case 'geminis': 
    case 'géminis': 
        console.log('Nunca se olvide que lo primordial para alcanzar todos los objetivos, es estar siempre seguro de los deseos que uno quiere alcanzar. Sea constante.')
        break

    case 'cancer':
    case 'cáncer': 
        console.log('Sepa que antes de fijar los objetivos deberá considerar los inconvenientes posibles y adecuar todas sus ideas a los recursos con los que cuenta.')
        break

    case 'leo':
        console.log('Se despertará con el convencimiento de introducir nuevos cambios en su forma de actuar. No dude más, ya es el momento de hacerlo en su vida.')
        break

    default: 
        console.log('Signo no valido')
}

