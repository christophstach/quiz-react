import { FormEvent, useState } from 'react';

export type MailFormProps = {
  onSubmit: (firstName: string, email: string) => void;
};

export function MailForm(props: MailFormProps) {
  const { onSubmit } = props;

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(firstName, email);
  }

  return (
    <form className="tw-p-10" onSubmit={handleSubmit}>
      <h1 className="tw-text-jansen-purple tw-font-bold tw-text-2xl tw-text-center">
        Fast geschafft! Wohin soll ich dir deine Auswertung inklusive 6-Wochen-Finanzplan schicken?
      </h1>

      <div className="tw-mb-5 tw-flex tw-items-center tw-gap-6">
        <label className="tw-block tw-w-16" htmlFor="firstname-input">
          <img src="https://andreasjansen.com/wp-content/uploads/2022/03/ID.png" alt="Firstname Icon" />
        </label>

        <div className="tw-flex-1">
          <input
            id="firstname-input"
            className="tw-p-3 tw-w-full tw-border"
            type="text"
            placeholder="Vorname (Optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>

      <div className="tw-mb-5 tw-flex tw-items-center  tw-gap-6">
        <label className="tw-block  tw-w-16" htmlFor="email-input">
          <img src="https://andreasjansen.com/wp-content/uploads/2022/03/Email.png" alt="E-Mail Icon" />
        </label>

        <div className="tw-flex-1">
          <input
            id="email-input"
            className="tw-p-3 tw-w-full tw-border"
            type="email"
            placeholder="E-Mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button className="tw-bg-jansen-purple tw-text-jansen-yellow tw-w-full tw-p-5 tw-text-2xl" type="submit">
          Zur Auswertung
        </button>
      </div>
    </form>
  );
}
