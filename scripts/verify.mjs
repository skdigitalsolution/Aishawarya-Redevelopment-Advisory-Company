import assert from 'node:assert/strict';
import { services } from '../src/data/services.js';
import { process } from '../src/data/process.js';
import { articles } from '../src/data/articles.js';
import { contactFields } from '../src/data/formFields.js';
import { assessmentFields } from '../src/data/assessmentFields.js';
import { projectData } from '../src/data/projects.js';
import { navigation } from '../src/data/navigation.js';
import { normalizeMobile, validateFields, createDraft, createHandoff } from '../src/components/forms/formUtils.js';
assert.equal(services.length, 20);
assert.equal(new Set(services.map((s) => s.id)).size, 20);
assert.equal(new Set(services.map((s) => s.category)).size, 6);
assert.equal(process.length, 8);
assert.equal(articles.length, 10);
assert.equal(new Set(articles.map((a) => a.slug)).size, 10);
assert.equal(projectData.verified.length, 0);
assert.equal(projectData.testimonials.length, 0);
for (const mobile of ['9137304005', '+919137304005', '+91 9137304005', '91-9137304005'])
  assert.equal(normalizeMobile(mobile), '9137304005');
for (const mobile of ['1234567890', '91373', '913730400512', '++919137304005', '91373abc4005']) assert.equal(normalizeMobile(mobile), '');
const valid = {
  fullName: 'Test Committee',
  mobile: '9137304005',
  email: 'review@example.test',
  society: 'Test Society',
  location: 'Mumbai',
  enquiryType: 'Society Redevelopment',
  message: 'Please explain the documents needed for review.',
};
assert.deepEqual(validateFields(contactFields, valid), {});
assert.ok(validateFields(contactFields, { ...valid, email: 'bad' })['email']);
assert.ok(validateFields(contactFields, { ...valid, fullName: '   ' })['fullName']);
assert.ok(validateFields(contactFields, { ...valid, enquiryType: 'unsupported' })['enquiryType']);
const assessment = {
  society: 'Test Society',
  fullName: 'Test Committee',
  mobile: '9137304005',
  location: 'Mumbai',
  age: '35',
  members: '40',
  conveyance: 'Not sure',
  audit: 'Not sure',
  stage: 'Initial discussion',
};
assert.deepEqual(validateFields(assessmentFields, assessment), {});
assert.ok(validateFields(assessmentFields, { ...assessment, age: '-5' })['age']);
assert.ok(validateFields(assessmentFields, { ...assessment, members: '2.5' })['members']);
assert.ok(validateFields(assessmentFields, { ...assessment, plot: 'Infinity' })['plot']);
const draft = createDraft('Assessment', assessmentFields, assessment);
const links = createHandoff('Assessment', draft);
assert.ok(links.email.startsWith('mailto:sachin.aishwaryaredevelopment@gmail.com?'));
assert.ok(links.whatsapp.startsWith('https://wa.me/919137304005?text='));
assert.ok(decodeURIComponent(links.whatsapp).includes('Conveyance Status: Not sure'));
const routes = new Set([
  '/',
  '/about-us',
  '/founder-leadership',
  '/services',
  '/society-redevelopment',
  '/self-redevelopment',
  '/land-banking',
  '/redevelopment-process',
  '/projects',
  '/knowledge-centre',
  '/contact-us',
]);
for (const item of navigation) {
  for (const link of item.items ?? [item]) assert.ok(routes.has(link.to.split(/[?#]/)[0]), link.to);
}
console.log(
  'PASS: content integrity, 20 services / 6 categories, 8 stages, 10 articles, navigation destinations, mobile/email/number validation and handoff encoding. No external form submissions performed.',
);
