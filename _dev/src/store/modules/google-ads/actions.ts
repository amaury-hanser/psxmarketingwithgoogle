// TODO WHEN API OK :
// Retrieve when error is Suspended / BillingSettingsMissing /NeedRefreshAfterBilling/ Cancelled

/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
import MutationsTypes from './mutations-types';
import ActionsTypes from './actions-types';
import HttpClientError from '../../../utils/HttpClientError';

export default {
  async [ActionsTypes.GET_GOOGLE_ADS_LIST]({commit, rootState}) {
    // try {
    //   const resp = await fetch(`${rootState.app.psxMktgWithGoogleApiUrl}/google-ads/list`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${rootState.accounts.tokenPsAccounts}`,
    //       },
    //     });
    //   if (!resp.ok) {
    //     throw new HttpClientError(resp.statusText, resp.status);
    // commit(MutationsTypes.SET_GOOGLE_ADS_STATUS, 'CantConnect',
    //   }
    //   const json = await resp.json();
    //   commit(MutationsTypes.SET_GOOGLE_ADS_LIST, json);
    commit(MutationsTypes.SET_GOOGLE_ADS_LIST, [
      {
        id: 4150564877,
        name: 'Lui Corpette',
        isAdmin: false,
      },
      {
        id: 4150564874,
        name: 'Tata Corpette',
        isAdmin: false,
      },
      {
        id: 4150564875,
        name: 'Tutu Corpette',
        isAdmin: true,
      },
    ]);
    // } catch (error) {
    //   console.error(error);
    // }
  },
  async [ActionsTypes.GET_GOOGLE_ADS_ACCOUNT]({commit, rootState}) {
    // try {
    //   const resp = await fetch(`${rootState.app.psxMktgWithGoogleApiUrl}/google-ads`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${rootState.accounts.tokenPsAccounts}`,
    //       },
    //     });
    //   if (!resp.ok) {
    //     throw new HttpClientError(resp.statusText, resp.status);
    // commit(MutationsTypes.SET_GOOGLE_ADS_STATUS, 'CantConnect',
    // );
    //   }
    //   const json = await resp.json();
    //   commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT, json);
    commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT,
      {
        id: 4150564877,
        name: 'Lui Corpette',
        isAdmin: false,
      },
    );
    commit(MutationsTypes.UPDATE_GOOGLE_ADS_SHOP_INFORMATIONS,
      {
        country: {
          // eslint-disable-next-line camelcase
          iso_code: 'FR',
          name: 'France',
        },
        currency: 'EUR',
        timeZone: {
          text: null,
          offset: null,
        },
      },
    );
    // } catch (error) {
    //   console.error(error);
    // }
  },
  async [ActionsTypes.SAVE_NEW_GOOGLE_ADS_ACCOUNT]({commit, rootState, dispatch}, payload: object) {
    // try {
    //   const resp = await fetch(`${rootState.app.psxMktgWithGoogleApiUrl}/google-ads`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${rootState.accounts.tokenPsAccounts}`,
    //       },
    //       body: JSON.stringify({
    //         payload,
    //       }),
    //     });
    //   if (!resp.ok) {
    //     throw new HttpClientError(resp.statusText, resp.status);
    // commit(MutationsTypes.SET_GOOGLE_ADS_STATUS, 'CantConnect',

    //   }
    //   const json = await resp.json();

    const newUser = {
      id: 4152564877,
      name: 'TOUTOUTOUTOU',
      isAdmin: false,
    };
    commit(MutationsTypes.ADD_NEW_GOOGLE_ADS_ACCOUNT, newUser);
    commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT, newUser);

    // } catch (error) {
    //   console.error(error);
    // }
  },
  async [ActionsTypes.DISSOCIATE_GOOGLE_ADS_ACCOUNT]({commit, rootState, state},
    correlationId: string) {
    // eslint-disable-next-line no-param-reassign
    //     correlationId = `${state.shopIdPsAccounts}-${Math.floor(Date.now() / 1000)}`;
    //   const response = await fetch(`${rootState.app.psxMktgWithGoogleApiUrl}/google-ads`, {
    //     method: 'DELETE',
    //     headers: {
    //       Accept: 'application/json',
    //       Authorization: `Bearer ${state.tokenPsAccounts}`,
    //       'x-correlation-id': correlationId,
    //     },
    //   });
    //   if (!response.ok) {
    //     console.log('dissociate failed');
    // commit(MutationsTypes.SET_GOOGLE_ADS_STATUS, '',

    //     throw new HttpClientError(response.statusText, response.status);
    // }
    commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT, null);
    return true;
  },

  async [ActionsTypes.SAVE_SELECTED_GOOGLE_ADS_ACCOUNT]({commit, rootState}, payload: object) {
    // const id = payload.id
    // try {
    //   const resp = await fetch(`${rootState.app.psxMktgWithGoogleApiUrl}/google-ads/${id}`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${rootState.accounts.tokenPsAccounts}`,
    //       },
    //       body: JSON.stringify({
    //         payload,
    //       }),
    //     });
    //   if (!resp.ok) {
    //     throw new HttpClientError(resp.statusText, resp.status);
    // commit(MutationsTypes.SET_GOOGLE_ADS_STATUS, 'CantConnect',

    //   }
    //   const json = await resp.json();
    //   commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT, {
    //   id: json.id,
    //   name: json.name,
    //   isAdmin: json.isAdmin,
    // });
    commit(MutationsTypes.SET_GOOGLE_ADS_ACCOUNT, payload);
    // } catch (error) {
    //   console.error(error);
    // }
  },

};
