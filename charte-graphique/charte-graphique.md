# Charte graphique — Ostéopathes Le Pian-Médoc

## 1. Identité

- **Nom du site** : Ostéopathe Le Pian-Médoc (33290) - Cabinet d'Ostéopathie
- **Logo** : `LOGO/LOGO.webp`
- **Déclinaisons du logo** : `LOGO/Couleurs/`

## 2. Palette de couleurs

### Couleurs principales

| Nom | Variable CSS | Couleur | Aperçu |
|---|---|---|---|
| Bleu primaire | `--primary` | `#1a6fb5` | 🟦 |
| Bleu primaire clair | `--primary-light` | `#e3f0fb` | 🟦 |
| Bleu primaire foncé | `--primary-dark` | `#0e4a7a` | 🟦 |
| Bleu primaire profond | `--primary-deeper` | `#0a3558` | 🟦 |

### Couleurs d'accent

| Nom | Variable CSS | Couleur |
|---|---|---|
| Accent (bleu ciel) | `--accent` | `#40b4e5` |
| Accent clair | `--accent-light` | `#d6f0fb` |

### Couleurs dorées (mise en valeur)

| Nom | Variable CSS | Couleur |
|---|---|---|
| Or | `--gold` | `#d5a83f` |
| Or clair | `--gold-light` | `#f4df9a` |
| Or foncé | `--gold-dark` | `#9b7420` |

### Couleurs neutres / texte / fond

| Nom | Variable CSS | Couleur | Usage |
|---|---|---|---|
| Texte principal | `--text` | `#1e2a3a` | Corps de texte |
| Texte secondaire | `--text-light` | `#4a5e75` | Sous-titres, texte atténué |
| Fond général | `--bg` | `#f7fafd` | Arrière-plan des pages |
| Blanc | `--white` | `#ffffff` | Cartes, navbar |

### Dégradés

| Nom | Variable CSS | Définition |
|---|---|---|
| Dégradé principal | `--gradient` | `linear-gradient(135deg, #1a6fb5 0%, #40b4e5 50%, #1a6fb5 100%)` |
| Dégradé doré | `--gradient-gold` | `linear-gradient(135deg, #f4df9a 0%, #d5a83f 50%, #9b7420 100%)` |
| Dégradé hero | `--gradient-hero` | `linear-gradient(160deg, #0e4a7a 0%, #1a6fb5 40%, #40b4e5 100%)` |
| Dégradé doux | `--gradient-soft` | `linear-gradient(135deg, #e3f0fb 0%, #f0f8ff 100%)` |
| Dégradé carte | `--gradient-card` | `linear-gradient(145deg, #ffffff 0%, #f0f8ff 100%)` |

### Ombres

| Nom | Variable CSS | Définition |
|---|---|---|
| Ombre standard | `--shadow` | `0 2px 20px rgba(26, 111, 181, 0.08)` |
| Ombre large | `--shadow-lg` | `0 8px 40px rgba(26, 111, 181, 0.12)` |
| Ombre bleue | `--shadow-blue` | `0 6px 25px rgba(26, 111, 181, 0.2)` |
| Ombre dorée | `--shadow-gold` | `0 8px 26px rgba(213, 168, 63, 0.22)` |

## 3. Typographie

- **Police principale** : `Inter` (sans-serif), avec fallback système : `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Titres (h1, h2)** : `Inter`, graisse `800` (extra-bold)
- **Corps de texte** : `Inter`, graisse normale, interligne `1.7`
- **Base html** : `16px`

## 4. Style et mise en page

- **Rayons de bordure**
  - `--radius` : `14px` (éléments standards : cartes, boutons)
  - `--radius-lg` : `22px` (grands blocs, bannières)
- **Transitions** : `0.3s ease` (`--transition`) pour les survols et changements d'état
- **Conteneur principal** : largeur max `1200px`, centré, padding horizontal `24px`
- **Navbar** : fixe, fond blanc, bordure basse fine `rgba(26, 111, 181, 0.08)`, effet flouté (`backdrop-filter: blur(6px)`) sur la page d'accueil au scroll

## 5. Ton et usage des couleurs

- **Bleu primaire** : couleur dominante (navigation, boutons, liens, titres de section, éléments interactifs)
- **Doré** : couleur d'accent utilisée avec parcimonie pour valoriser des éléments clés (CTA, badges, mise en avant)
- **Fonds clairs** (`--bg`, `--primary-light`, `--gradient-soft`) : utilisés pour les sections alternées et créer de la respiration visuelle
- **Blanc** : cartes, navbar, contenus mis en valeur sur fond coloré
