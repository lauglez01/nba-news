export class latestNews {
  #title;
  #source;
  #url;

  constructor(title, source, url){
    this.#title = title;
    this.#source = source;
    this.#url = url;
  }
    
  get title(){
    return this.#title;
  }

  set title(title){
    this.#title = title;
  }

  get source(){
    return this.#source;
  }

  set source(source){
    this.#source = source;
  }

  get url(){
    return this.#url;
  }

  set url(url){
    this.#url = url;
  }
}
  