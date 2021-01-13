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

export interface NgStory {
  component?: any;
  props: ICollection;
  moduleMetadata?: NgModuleMetadata;
  template?: string;
}
