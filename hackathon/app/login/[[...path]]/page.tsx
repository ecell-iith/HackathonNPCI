'use client';

import { useEffect } from 'react';
import { redirectToAuth } from 'supertokens-auth-react';
import SuperTokens from 'supertokens-auth-react/ui';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';

export default function Auth() {
  // if the user visits a page that is not handled by us (like /auth/random), then we redirect them back to the auth page.
  useEffect(() => {
    if (
      SuperTokens.canHandleRoute([ThirdPartyPreBuiltUI]) === false
    ) {
      redirectToAuth({ redirectBack: false });
    }
  }, []);

  if (typeof window !== 'undefined') {
    return SuperTokens.getRoutingComponent([ThirdPartyPreBuiltUI]);
  }

  return null;
}