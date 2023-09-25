import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileLoaderService {
  loadScript(src: string, head: boolean = true): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = reject;
      if (head) {
        document.head.appendChild(script);
      }else{
        document.body.appendChild(script);
      }
    });
  }

  loadStylesheet(href: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      link.onload = () => resolve();
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
}
