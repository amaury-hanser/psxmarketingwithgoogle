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
import {MerchantCenterAccount} from './state';
import HttpClientError from '../../../utils/HttpClientError';

export default {
  async [ActionsTypes.TRIGGER_ONBOARD_TO_GOOGLE_ACCOUNT]({commit, rootState}, webhookUrl: String) {
    try {
      const response = await fetch(`${rootState.app.psGoogleShoppingApiUrl}/account/onboard`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify(webhookUrl),
      });
      const json = await response.json();
      if (!response.ok) {
        throw new HttpClientError(response.statusText, response.status);
      }
      commit(MutationsTypes.SET_GOOGLE_ACCOUNT, json);
    } catch (error) {
      console.error(error);
    }
  },

  [ActionsTypes.SAVE_SELECTED_GOOGLE_ACCOUNT]({commit}, selectedAccount: MerchantCenterAccount) {
    commit(MutationsTypes.SAVE_MCA_ACCOUNT, selectedAccount);
    // ToDo: Replace the following lines with the actual behavior
    commit(MutationsTypes.SAVE_MCA_WEBSITE_VERIFICATION_PROGRESS_STATUS, 'checking');
    setTimeout(() => {
      commit(MutationsTypes.SAVE_MCA_WEBSITE_VERIFICATION_PROGRESS_STATUS, 'doneAlert');
      setTimeout(() => {
        commit(MutationsTypes.SAVE_MCA_WEBSITE_VERIFICATION_PROGRESS_STATUS, 'done');
      }, 2000);
    }, 2000);
  },

  async [ActionsTypes.REQUEST_ROUTE_TO_GOOGLE_AUTH]({commit, state, rootState}) {
    const urlState = btoa(JSON.stringify({
      redirectUri: rootState.app.psGoogleShoppingShopUrl,
      shopId: state.shopIdPsAccounts,
    }));
    try {
      const response = await fetch(`${rootState.app.psGoogleShoppingApiUrl}/oauth/${state.shopIdPsAccounts}/authorized-url?state=${urlState}`);
      if (!response.ok) {
        throw new HttpClientError(response.statusText, response.status);
      }
      const json = await response.json();
      commit(MutationsTypes.SET_GOOGLE_AUTHENTICATION_URL, json.authorizedUrl);
    } catch (error) {
      console.error(error);
    }
  },

  async [ActionsTypes.REFRESH_GOOGLE_ACCESS_TOKEN]({commit, state, rootState}) {
    try {
      const response = await fetch(`${rootState.app.psGoogleShoppingApiUrl}/oauth/${state.shopIdPsAccounts}/`);
      if (!response.ok) {
        throw new HttpClientError(response.statusText, response.status);
      }
      const json = await response.json();
      commit(MutationsTypes.SAVE_GOOGLE_ACCOUNT_TOKEN, json.access_token);
    } catch (error) {
      if (error.status === 404) {
        commit(MutationsTypes.REMOVE_GOOGLE_ACCOUNT);
        console.error(error);
      }
    }
  },

  async [ActionsTypes.REQUEST_GOOGLE_ACCOUNT_DETAILS]({
    commit, state, rootState, dispatch,
  }) {
    try {
      // ToDo: ⚠️ We need another route to get all account details, not only the token
      const response = await fetch(`${rootState.app.psGoogleShoppingApiUrl}/oauth/${state.shopIdPsAccounts}/`);
      if (!response.ok) {
        throw new HttpClientError(response.statusText, response.status);
      }
      const json = await response.json();
      commit(MutationsTypes.SAVE_GOOGLE_ACCOUNT_TOKEN, json.access_token);
      commit(MutationsTypes.SET_GOOGLE_ACCOUNT, json);
    } catch (error) {
      if (error instanceof HttpClientError && error.code === 404) {
        // This is likely caused by a missing Google account, so retrieve the URL
        dispatch(ActionsTypes.DISSOCIATE_GOOGLE_ACCOUNT);
        console.error(error);
      }
    }
  },

  [ActionsTypes.DISSOCIATE_GOOGLE_ACCOUNT]({commit, dispatch}) {
    dispatch(ActionsTypes.DISSOCIATE_MERCHANT_CENTER_ACCOUNT);
    // ToDo: Add API calls if needed
    commit(MutationsTypes.REMOVE_GOOGLE_ACCOUNT);
    commit(MutationsTypes.SET_GOOGLE_ACCOUNT, null);
    dispatch(ActionsTypes.REQUEST_ROUTE_TO_GOOGLE_AUTH);
  },

  [ActionsTypes.DISSOCIATE_MERCHANT_CENTER_ACCOUNT]({commit}) {
    // ToDo: Add API calls if needed
    commit(MutationsTypes.REMOVE_MCA_ACCOUNT);
  },
};