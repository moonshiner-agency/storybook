import { StoryFn } from '@storybook/addons';

export declare const moduleMetadata: (
  metadata: Partial<NgModuleMetadata>
) => (storyFn: StoryFn<StoryFnAngularReturnType>) => any;

export interface NgModuleMetadata {
  declarations?: any[];
  entryComponents?: any[];
  imports?: any[];
  schemas?: any[];
  providers?: any[];
}
export interface ICollection {
  [p: string]: any;
}

export interface IStorybookStory {
  name: string;
  render: () => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface StoryFnAngularReturnType {
  /** @deprecated `component` story input is deprecated, and will be removed in Storybook 7.0. */
  component?: any;
  props?: ICollection;
  propsMeta?: ICollection;
  moduleMetadata?: NgModuleMetadata;
  template?: string;
  styles?: string[];
}
