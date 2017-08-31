import $ from 'jquery';

export default {
  get $root() {
    return $('[data-test-eholdings-customer-resource-show]');
  },

  get titleName() {
    return $('[data-test-eholdings-customer-resource-show-title-name]').text();
  },

  get publisherName() {
    return $('[data-test-eholdings-customer-resource-show-publisher-name]').text();
  },

  get publisherType() {
    return $('[data-test-eholdings-customer-resource-show-publisher-type]').text();
  },

  get vendorName() {
    return $('[data-test-eholdings-customer-resource-show-vendor-name]').text();
  },

  get packageName() {
    return $('[data-test-eholdings-customer-resource-show-package-name]').text();
  },

  get contentType() {
    return $('[data-test-eholdings-customer-resource-show-content-type]').text();
  },

  get managedUrl() {
    return $('[data-test-eholdings-customer-resource-show-managed-url]').text();
  },

  get hasErrors() {
    return $('[data-test-eholdings-customer-resource-show-error]').length > 0;
  },

  get isSelected() {
    return $('[data-test-eholdings-customer-resource-show-selected]').text();
  }
};
