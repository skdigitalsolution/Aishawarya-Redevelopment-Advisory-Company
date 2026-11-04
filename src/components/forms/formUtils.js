import { content as c } from '../../data/content.js';
/** Normalize common Indian mobile formats without accepting malformed separators. */
export function normalizeMobile(value = '') {
  const raw = value.trim();
  if (!/^(?:\+91[ -]?|91[ -]?)?[6-9]\d{9}$/.test(raw)) return '';
  return raw.replace(/\D/g, '').slice(-10);
}
/** Pure schema validation, shared by enquiry and readiness forms. */
export function validateFields(fields, values) {
  const errors = {};
  for (const field of fields) {
    const value = String(values[field.name] ?? '').trim();
    if (field.required && !value) {
      errors[field.name] = c.form.required;
      continue;
    }
    if (!value) continue;
    if (field.name === 'mobile' && !normalizeMobile(value)) errors[field.name] = c.form.mobile;
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[field.name] = c.form.emailError;
    if (
      field.type === 'number' &&
      (!Number.isFinite(Number(value)) ||
        Number(value) < (field.min ?? 1) ||
        Number(value) > (field.max ?? Infinity) ||
        (['age', 'members'].includes(field.name) && !Number.isInteger(Number(value))))
    )
      errors[field.name] = c.form.numberError;
    if (field.type === 'select' && !field.options.includes(value)) errors[field.name] = c.form.required;
    if (value.length > (field.maxLength ?? 150)) errors[field.name] = `Use ${field.maxLength ?? 150} characters or fewer.`;
  }
  return errors;
}
/** Build a labeled, plain-text handoff; no network request is performed. */
export function createDraft(title, fields, values) {
  return `${title}\n${c.company.name}\n\n${fields.map((field) => `${field.label}: ${String(values[field.name] ?? '').trim() || 'Not provided'}`).join('\n')}`;
}
export function createHandoff(title, message) {
  return {
    email: `mailto:${c.contact.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(message)}`,
    whatsapp: `${c.contact.whatsapp}?text=${encodeURIComponent(message)}`,
  };
}
