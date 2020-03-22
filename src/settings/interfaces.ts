export interface MdgInitiator {
  pattern: string | Array<string>;
  onError?: Function;
  onSuccess?: Function;
  validation?: Function;
}

export interface MdgPublic extends MdgInitiator {
  checkValue: Function;
  checkField: Function;
}

export interface MaskSettings extends MdgInitiator {
  input: string;
}

export interface MaskOutput {
  input: string;
  output: string;
  completed: boolean;
  isValid: boolean | null;
}

export interface MaskEntryMetadata {
  originalMask: Array<string>;
  cleanedMask: Array<string> | string;
  blindedMask: Array<string>;
}

export interface MaskEntryOutput {
  output: string;
  cleanedMask: Array<string> | string;
  completed: boolean;
}
