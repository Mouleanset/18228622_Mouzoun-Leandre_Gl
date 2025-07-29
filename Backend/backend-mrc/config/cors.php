<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Ce fichier permet de configurer les règles CORS pour ton API Laravel.
    | Adapte 'allowed_origins' à l’URL de ton frontend.
    |
    */

    // Les chemins où le CORS sera appliqué (ici toutes les routes API)
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    // Méthodes HTTP autorisées
    'allowed_methods' => ['*'],

    // Origines autorisées — remplace par l’URL de ton frontend (exemple localhost:3000)
    'allowed_origins' => ['http://localhost:3000'],

    // Patterns autorisés (optionnel)
    'allowed_origins_patterns' => [],

    // Headers autorisés dans les requêtes
    'allowed_headers' => ['*'],

    // Headers exposés au frontend (optionnel)
    'exposed_headers' => [],

    // Durée (en secondes) pendant laquelle le résultat de prévol CORS peut être mis en cache par les navigateurs
    'max_age' => 0,

    // Autoriser ou non l’envoi des cookies / credentials (false si pas besoin)
    'supports_credentials' => false,

];
