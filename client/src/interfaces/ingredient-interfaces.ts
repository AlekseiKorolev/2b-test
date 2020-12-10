export interface Preview extends Ingredients {
  thick: cssRules;
}
export interface Ingredients {
  dough: cssRules;
  tomatoes: cssRules;
  pepper: cssRules;
  olives: cssRules;
  basil: cssRules;
  mushrooms: cssRules;
  cheese: cssRules;
  salami: cssRules;
  jamon: cssRules;
}
interface cssRules {
  backgroundRepeat: string;
  backgroundPosition: string;
  backgroundSize: string;
  width: string;
  height: string;
}
