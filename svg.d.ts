// En tu archivo custom.d.ts
import 'react';

declare module 'react' {
  interface SVGProps<T> extends React.DOMAttributes<T> {
    slot?: string;
  }
}