import queryString from 'query-string';

const url = `
  'https://ima-notebook-prod.image.myqcloud.com
  /2/YDUMBeYFy74mhXfvda0fYP/7374ae7fda8845c98f38644eca6b6717.m4a
  ?media_id=soundrecording_b0598384e120305a60df05288cdab2df_ee408e9002be2fbbb581b0fca3707bc71765174455152
  &media_title=%E5%BD%95%E9%9F%B3%E7%BA%AA%E8%A6%81_251208141328
  &q-key-time=1766114785%3B1766143585&q-sign-algorithm=sha1
  &q-sign-time=1766114785%3B1766143585
  &q-url-param-list=&showToolBar=0&current_time=0
  &is_playing=0
  &doc_id=7403678273124505
  &duration=32799
  &share_scene=0
  &source_knowledge_base_id=
  &share_id=';
`;
const query = queryString.parse(url);
console.error('🐥 ~ query:', query);

const query1 = new URLSearchParams({
  a: 'true',
});
console.error('🐥 ~ query1:', typeof query1.get('a'));
