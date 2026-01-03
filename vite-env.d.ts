
/* Fixed: Removed problematic vite/client reference and provided manual ImportMeta definition to resolve the 'Cannot find type definition' error */
interface ImportMeta {
  readonly glob: (
    pattern: string,
    options?: {
      as?: string;
      eager?: boolean;
      import?: string;
      query?: string;
    }
  ) => Record<string, any>;
}

interface ImportMetaEnv {
  [key: string]: any;
}
