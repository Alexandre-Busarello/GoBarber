import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Mail from '../../lib/Mail';

class CancellationMail {
  // Chave unica para registro na fila
  get key() {
    return 'CancellationMail';
  }

  // Ação do JOB ao ser executado
  async handle({ data }) {
    console.log(1);
    const { appointment } = data;

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: ptBR,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
