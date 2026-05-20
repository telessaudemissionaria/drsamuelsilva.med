/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Areas } from './components/Areas';
import { Instagram } from './components/Instagram';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-cream font-sans selection:bg-brand-black selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Areas />
      <Instagram />
      <Footer />
    </main>
  );
}
