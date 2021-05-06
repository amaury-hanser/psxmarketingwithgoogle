<?php

namespace PrestaShop\Module\PrestashopGoogleShopping\Config;

class Config
{
    const API_URL = 'https://googleshopping-api.psessentials.net';

    const HOOK_LIST = [
        'displayBackOfficeHeader',
    ];

    const CONFIGURATION_LIST = [];

    const MODULE_ADMIN_CONTROLLERS = [
        'AdminAjaxPsgoogleshipping',
        'AdminPsgoogleshippingModule',
    ];

    const PSX_GOOGLE_SHOPPING_SENTRY_CREDENTIALS = 'https://205f0aa236aa46b8883ac8ded58f4839@o471790.ingest.sentry.io/5532403';
    const PSX_GOOGLE_SHOPPING_SEGMENT_API_KEY = 'GnGf1m503biLVjo3a52nplV1becA0kiv';
}
