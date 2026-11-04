import { content as c } from '../../data/content';
/** @param {{field: object, value: string, error?: string, onChange: Function, prefix: string}} props Labeled schema field. */
export default function FormField({ field, value, error, onChange, prefix }) {
  const id = `${prefix}-${field.name}`;
  const common = {
    id,
    name: field.name,
    value,
    onChange,
    required: field.required,
    autoComplete: field.autoComplete,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    className: `min-h-12 w-full rounded-lg border bg-white px-3 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15 ${error ? 'border-red-600' : 'border-navy/20'}`,
  };
  return (
    <div className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold">
        {field.label}
        {field.required ? (
          <span className="ml-1 text-gold" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-[10px] font-normal text-navy/50">{c.form.optional}</span>
        )}
      </label>
      {field.type === 'select' ? (
        <select {...common}>
          <option value="">{c.form.choose}</option>
          {field.options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea {...common} rows="4" maxLength={field.maxLength ?? 1500} />
      ) : (
        <input
          {...common}
          type={field.type ?? 'text'}
          inputMode={field.inputMode}
          maxLength={field.maxLength ?? 150}
          min={field.min}
          max={field.max}
          step={['age', 'members'].includes(field.name) ? 1 : 'any'}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
