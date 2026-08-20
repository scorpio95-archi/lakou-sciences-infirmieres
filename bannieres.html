/* =====================================================================
   LAKOU SCES INFIRMIÈRES — logique partagée des pages bannière
   Chaque page définit un objet BANNIERE avant d'inclure ce script :
     { table, champs:[...], types:[[valeur,libelle],...], aChamps:{lieu:true, tags:true} }
===================================================================== */
async function initBanniere(config) {
  const conteneur = document.getElementById('grille-bannieres');
  const selectType = document.getElementById('filtre-type');
  const champRecherche = document.getElementById('champ-recherche');
  const selectTag = document.getElementById('filtre-tag');

  config.types.forEach(function (t) {
    var opt = document.createElement('option');
    opt.value = t[0]; opt.textContent = t[1];
    selectType.appendChild(opt);
  });

  const { data, error } = await window.supabaseClient
    .from(config.table)
    .select(config.champs.join(', '))
    .eq('status', 'valide')
    .order('created_at', { ascending: false });

  if (error || !data) {
    conteneur.innerHTML = '<p class="auth-sub">Impossible de charger les archives pour le moment.</p>';
    console.error('Erreur chargement ' + config.table + ' :', error);
    return;
  }

  const items = data;

  if (selectTag) {
    const tousLesTags = new Set();
    items.forEach(function (i) { (i.tags || []).forEach(function (t) { tousLesTags.add(t); }); });
    Array.from(tousLesTags).sort().forEach(function (tag) {
      var opt = document.createElement('option');
      opt.value = tag; opt.textContent = tag;
      selectTag.appendChild(opt);
    });
  }

  function rendre() {
    const typeFiltre = selectType.value;
    const tagFiltre = selectTag ? selectTag.value : '';
    const recherche = champRecherche.value.trim().toLowerCase();

    const filtres = items.filter(function (i) {
      if (typeFiltre && i.type !== typeFiltre) return false;
      if (tagFiltre && (!i.tags || i.tags.indexOf(tagFiltre) === -1)) return false;
      if (recherche && (i.titre || '').toLowerCase().indexOf(recherche) === -1) return false;
      return true;
    });

    conteneur.innerHTML = '';

    if (filtres.length === 0) {
      conteneur.innerHTML = '<p class="auth-sub">Aucun résultat.</p>';
      return;
    }

    filtres.forEach(function (item) {
      const carte = document.createElement('div');
      carte.className = 'archive-card';

      const typeTrouve = config.types.find(function (t) { return t[0] === item.type; });
      const libelleType = typeTrouve ? typeTrouve[1] : item.type;
      const date = new Date(item.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' });

      const meta = [libelleType];
      if (item.lieu) meta.push(item.lieu + (item.annee ? ' · ' + item.annee : ''));
      meta.push(date);

      carte.innerHTML =
        '<p class="archive-card-titre">' + (item.titre || '(sans titre)') + '</p>' +
        '<p class="archive-card-meta">' + meta.join(' · ') + '</p>' +
        (item.description ? '<p class="archive-card-desc">' + item.description + '</p>' : '') +
        (item.tags && item.tags.length ? '<div class="archive-card-tags">' + item.tags.map(function (t) { return '<span class="tag-pill">' + t + '</span>'; }).join('') + '</div>' : '') +
        '<div class="archive-card-body"></div>' +
        (item.contenu || item.fichier_url ? '<button class="archive-card-toggle">Voir plus →</button>' : '');

      const corps = carte.querySelector('.archive-card-body');
      const bouton = carte.querySelector('.archive-card-toggle');

      if (bouton) {
        corps.style.display = 'none';
        bouton.addEventListener('click', function () {
          const ouvert = corps.style.display === 'block';
          corps.style.display = ouvert ? 'none' : 'block';
          bouton.textContent = ouvert ? 'Voir plus →' : 'Réduire ↑';
          if (!ouvert && !corps.dataset.rempli) {
            corps.innerHTML =
              (item.contenu ? '<p>' + item.contenu.replace(/\n/g, '<br>') + '</p>' : '') +
              (item.fichier_url ? '<a href="' + item.fichier_url + '" target="_blank" rel="noopener" class="btn-secondary" style="margin-top:8px; display:inline-block;">Ouvrir le fichier ↗</a>' : '');
            corps.dataset.rempli = '1';
          }
        });
      }

      conteneur.appendChild(carte);
    });
  }

  selectType.addEventListener('change', rendre);
  if (selectTag) selectTag.addEventListener('change', rendre);
  champRecherche.addEventListener('input', rendre);

  rendre();
}
