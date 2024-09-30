/**
 * @generated SignedSource<<72d0f0c51cfac75addd01373273bbdf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Feedback_viewDataFragment$data = {
  readonly viewDataField: string | null | undefined;
  readonly " $fragmentType": "Feedback_viewDataFragment";
};
export type Feedback_viewDataFragment$key = {
  readonly " $data"?: Feedback_viewDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Feedback_viewDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Feedback_viewDataFragment",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "viewDataField",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "ViewData",
  "abstractKey": null
};

(node as any).hash = "00ed7d96b48158f4c195f59ca1c0b1d2";

export default node;
